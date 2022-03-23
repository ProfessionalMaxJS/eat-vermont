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

    fetch("/backend/user_id")
      .then(r => r.json())
      .catch(err=>alert(err))
      .then(d=>{//console.log(d)
              setLoggedIn(d.user_id)
              })

}, [id, setLoggedIn])

const handleAccountChange = (e) =>{
    setBusiness({...business, [e.target.name]:e.target.value})
    // console.log(business)
}

const handleAccountPATCH = (e) =>{
    e.preventDefault()
    console.log("YO!")
    //console.log(business)
    // fetch(`/backend/businesses/${loggedIn}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(business),
    //   })
    //     .then(r => r.json())
    //     .catch(err=>alert(err))
    //     .then(d=>{//console.log(d)
    //             alert(`${d.business_name} has been updated`)
    //             setBusiness({...business, password:""})
    //           })
}

const toBizPage = useNavigate();
const handleSignUp = (e) =>{
    e.preventDefault();
    console.log("OY!")
    // // console.log(business)
    // fetch("/backend/businesses", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(business),
    //   })
    //     .then(r => r.json())
    //     .catch(err=>alert(err))
    //     .then(d=>{//console.log(d)
    //             setLoggedIn(d.id)
    //             setBusiness({business_name:"", town:"", link:"", username:"", password:"", password_confirmation:""})
    //             toBizPage(`/Business/${d.id}`)
        // })
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
    <p>{id && loggedIn && id==loggedIn ? "Edit Account Details":"Create An Account"}</p>
    <form style={{display:"flex", flexDirection:'column', width:"35vw"}} > 
        <input onChange={handleAccountChange} name="username" value={business.username} placeholder='email address' />
        {!id && !loggedIn && <input onChange={handleAccountChange} name="password" value={business.password} type="password" placeholder="password"/>}
        {!id && !loggedIn && <input onChange={handleAccountChange} name="password_confirmation" value={business.password_confirmation} type="password" placeholder="password confirmation"/>}
        <input onChange={handleAccountChange} name="business_name" value={business.business_name} placeholder="business name" />
        <input onChange={handleAccountChange} name="town" value={business.town} placeholder="town"/>
        <input onChange={handleAccountChange} name="link" value={business.link} placeholder="website" />
        <button onClick={id && loggedIn && id==loggedIn ? handleAccountPATCH : handleSignUp}>{id && loggedIn && id==loggedIn ? "Edit!" : "Sign Up!"}</button>
    </form>
    <br />
    {id && loggedIn && id==loggedIn && <p>"Post a Job"</p>}
    {id && loggedIn && id==loggedIn && <form style={{display:"flex", flexDirection:'column', width:"35vw"}} >
    <input onChange={handleJobChange} name="position" value={job.position} placeholder="position" />
    <input onChange={handleJobChange} name="hours" value={job.hours} placeholder="hours per week" />
    <input onChange={handleJobChange} name="rate" value={job.rate} placeholder="pay rate" type="number" step=".01" />
    <input onChange={handleJobChange} name="phone" value={job.phone} placeholder="contact phone" />
    <input onChange={handleJobChange} name="email" value={job.email} placeholder="contact email" />
    <button onClick={handleJobPost} >Post!</button>
    </form>}
    <Link to={id && loggedIn && id==loggedIn ? `/Business/${id}` : "/Login"}> {id && loggedIn && id==loggedIn ? "Account Page" : "Or, Log In?"}</Link>
    <br /><br />

    </>
)
}

export default Signup;