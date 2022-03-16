import {Link, useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Register(){

const [business, setBusiness] = useState({business_name:"", town:"", link:"", username:"", password:"", password_confirmation:""})
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

const handleChange = (e) =>{
    setBusiness({...business, [e.target.name]:e.target.value})
    // console.log(business)
}

const handleEdit = (e) =>{
    e.preventDefault()
    //console.log(business)
    
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
        // .catch(err=>alert(err))
        .then(d=>{//console.log(d)
                setBusiness({business_name:"", town:"", link:"", username:"", password:"", password_confirmation:""})
                toBizPage(`/Business/${d.id}`)
        })
}

return(
    <>

    <form style={{display:"flex", flexDirection:'column', width:"35vw"}} > 
        <input onChange={handleChange} name="username" value={business.username} placeholder='email address' ></input>
        <input onChange={handleChange} name="password" value={business.password} type="password" placeholder="password"></input>
        <input onChange={handleChange} name="password_confirmation" value={business.password_confirmation} type="password" placeholder="password confirmation"></input>
        <input onChange={handleChange} name="business_name" value={business.business_name} placeholder="business name" ></input>
        <input onChange={handleChange} name="town" value={business.town} placeholder="town"></input>
        <input onChange={handleChange} name="link" value={business.link} placeholder="website" ></input>
        <button onClick={id ? handleEdit : handleSignUp}>{id ? "Edit!" : "Sign Up!"}</button>
    </form>
    <br />
    <Link to={id ? `/Business/${id}` : "/Login"}> {id ? "Posted Jobs" : "Or, Log In?"}</Link>

    </>
)
}

export default Register;