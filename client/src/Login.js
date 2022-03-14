import {Link} from 'react-router-dom'

function Login(){

    return(
        <>
            <Link to="/" > All Jobs </Link>
            <br /><br />
            <form style={{display:"flex", flexDirection:"column", width:"35vw"}} >
                <input placeholder="email address" ></input>
                <input placeholder='password' ></input>
                <button>Login</button>
            </form>
        
            <Link to="/Register">or, Sign Up?</Link>
        </>
    )
}

export default Login;