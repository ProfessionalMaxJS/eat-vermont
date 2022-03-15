import {Link, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Register(){

const [account, setAccount] = useState({business_name:"", town:"", link:"", username:"", password:"", password_confirmation:""})
const id = useParams().id
useEffect(()=>{
    if(id){
        fetch(`/backend/businesses/${id}`)
        .then(r=>r.json())
        .then(d=>{//console.log(d)
                setAccount(d)
        })
    }
    }, [id])

const handleChange = (e) =>{
    setAccount({...account, [e.target.name]:e.target.value})
}

const handleEdit = (e) =>{
    e.preventDefault()
    //console.log(account)
    
}

const handleSignUp = (e) =>{
    e.preventDefault();
    // console.log(account)
    fetch("/backend/businesses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({account}),
      })
        .then(r => r.json())
        .catch(err=>alert(err))
        .then(d=>{console.log(d)
                // setAccount({business_name:"", town:"", link:"", username:"", password:"", password_confirmation:""})
        })
}

return(
    <>

    <form style={{display:"flex", flexDirection:'column', width:"35vw"}} > 
        <input onChange={handleChange} name="username" value={account.username} placeholder='email address' ></input>
        <input onChange={handleChange} name="password" value={account.password} type="password" placeholder="password"></input>
        <input onChange={handleChange} name="password_confirmation" value={account.password_confirmation} type="password" placeholder="password confirmation"></input>
        <input onChange={handleChange} name="business_name" value={account.business_name} placeholder="business name" ></input>
        <input onChange={handleChange} name="town" value={account.town} placeholder="town"></input>
        <input onChange={handleChange} name="link" value={account.link} placeholder="website" ></input>
        <button onClick={id ? handleEdit : handleSignUp}>{id ? "Edit!" : "Sign Up!"}</button>
    </form>
    <br />
    <Link to={id ? `/Business/${id}` : "/Login"}> {id ? "Posted Jobs" : "Or, Log In?"}</Link>

    </>
)
}

export default Register;