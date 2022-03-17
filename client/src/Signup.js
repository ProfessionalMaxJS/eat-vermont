import {Link, useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Signup({loggedIn, setLoggedIn}){

const [business, setBusiness] = useState({business_name:"", town:"", link:"", username:"", password:"", password_confirmation:""})
const [job, setJob] = useState({position:"",hours:"",rate:"",phone:"",email:""})
const id = useParams().id

useEffect(()=>{

    if(id){
        fetch(`/backend/businesses/${id}`)
        .then(r=>r.json())
        .then(d=>{//console.log(d)
                setBusiness(d)
        })
    }

}, [id])

const handleAccountChange = (e) =>{
    setBusiness({...business, [e.target.name]:e.target.value})
    // console.log(business)
}

const handleAccountPATCH = (e) =>{
    e.preventDefault()
    //console.log(business)
    fetch(`/backend/businesses/${loggedIn}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({business}),
      })
        .then(r => r.json())
        .catch(err=>alert(err))
        .then(d=>{console.log(d)
                // setLoggedIn(d.id)
                // setBusiness({business_name:"", town:"", link:"", username:"", password:"", password_confirmation:""})
                // toBizPage(`/Business/${d.id}`)
        })
}

const toBizPage = useNavigate();
const handleSignUp = (e) =>{
    e.preventDefault();
    // console.log(business)
    fetch("/backend/businesses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({business}),
      })
        .then(r => r.json())
        .catch(err=>alert(err))
        .then(d=>{//console.log(d)
                setLoggedIn(d.id)
                setBusiness({business_name:"", town:"", link:"", username:"", password:"", password_confirmation:""})
                toBizPage(`/Business/${d.id}`)
        })
}

const handleJobChange = (e) =>{
    setJob({...job, [e.target.name]:e.target.value})
}

const handleJobPost = (e) =>{
    e.preventDefault();

    fetch("/backend/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      })
        .then(r => r.json())
        .catch(err=>alert(err))
        .then(d=>{alert(`${d.position} has been added to the board`)
                setJob({position:"", hours:"",rate:"",phone:"",email:"",password:""})
        })
}

return(
    <>
    <p>{id==loggedIn ? "Edit Account Details":"Create An Account"}</p>
    <form style={{display:"flex", flexDirection:'column', width:"35vw"}} > 
        <input onChange={handleAccountChange} name="username" value={business.username} placeholder='email address' />
        <input onChange={handleAccountChange} name="password" value={business.password} type="password" placeholder={id==loggedIn ? "please confirm your password" : "password"}/>
        {id!=loggedIn && <input onChange={handleAccountChange} name="password_confirmation" value={business.password_confirmation} type="password" placeholder="password confirmation"/>}
        <input onChange={handleAccountChange} name="business_name" value={business.business_name} placeholder="business name" />
        <input onChange={handleAccountChange} name="town" value={business.town} placeholder="town"/>
        <input onChange={handleAccountChange} name="link" value={business.link} placeholder="website" />
        <button onClick={id==loggedIn ? handleAccountPATCH : handleSignUp}>{id==loggedIn ? "Edit!" : "Sign Up!"}</button>
    </form>
    <br />
    {id==loggedIn && <p>"Post a Job"</p>}
    {id==loggedIn && <form style={{display:"flex", flexDirection:'column', width:"35vw"}} >
    <input onChange={handleJobChange} name="position" value={job.position} placeholder="position" />
    <input onChange={handleJobChange} name="hours" value={job.hours} placeholder="hours" />
    <input onChange={handleJobChange} name="rate" value={job.rate} placeholder="pay rate (up to two decimals)" type="number" step=".01" />
    <input onChange={handleJobChange} name="phone" value={job.phone} placeholder="contact phone" />
    <input onChange={handleJobChange} name="email" value={job.email} placeholder="contact email" />
    <input onChange={handleJobChange} name="password" type="password" value={job.password} placeholder="please confirm your password" />
    <button onClick={handleJobPost} >Post!</button>
    </form>}
    <Link to={id==loggedIn ? `/Business/${id}` : "/Login"}> {id==loggedIn ? "Account Page" : "Or, Log In?"}</Link>
    <br /><br />

    </>
)
}

export default Signup;