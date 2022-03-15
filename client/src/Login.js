import {Link} from 'react-router-dom'

function Login(){

    const handleLogin = (e) =>{
        e.preventDefault();
    }

    return(
        <>
            <Link to="/" > All Jobs </Link>
            <br /><br />
            <form style={{display:"flex", flexDirection:"column", width:"35vw"}} >
                <input placeholder="email address" ></input>
                <input placeholder='password' ></input>
                <button onClick={handleLogin} >Login</button>
            </form>
            <br />
            <Link to="/Signup">or, Sign Up?</Link>
        </>
    )
}

export default Login;