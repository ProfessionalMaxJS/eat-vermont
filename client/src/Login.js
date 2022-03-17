import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';

function Login({loggedIn, setLoggedIn}){

    const [account, setAccount] = useState({username:"", password:""})

    const handleChange = (e) =>{
        setAccount({...account, [e.target.name]:e.target.value })
        // console.log(account)
    }

    const toBizPage = useNavigate()
    const handleLogin = (e) =>{
        e.preventDefault();
        // console.log(account)

        fetch("/backend/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
          })
            .then(r => r.json())
            .catch(err=>alert(err))
            .then(d=>{//console.log(d)
                    setLoggedIn(d.id)
                    setAccount({username:"", password:""})
                    toBizPage(`/Business/${d.id}`)
            })
    }

    return(
        <>
            <Link to="/" > Back to All Jobs </Link>
            <br /><br />
            <form style={{display:"flex", flexDirection:"column", width:"35vw"}} >
                <input name="username" value={account.username} onChange={handleChange} placeholder="email address" ></input>
                <input name="password" value={account.password} onChange={handleChange} placeholder='password' type="password" ></input>
                <button onClick={handleLogin} >Login</button>
            </form>
            <br />
            <Link to="/Signup">or, Sign Up?</Link>
        </>
    )
}

export default Login;