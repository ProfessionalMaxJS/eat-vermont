import {Link} from 'react-router-dom';

function Register(){

const handleSignUp = (e) =>{
    e.preventDefault();
}

return(
    <>

    <form style={{display:"flex", flexDirection:'column', width:"35vw"}} > 
        <input placeholder='email address' ></input>
        <input placeholder="password"></input>
        <input placeholder="password confirmation"></input>
        <input placeholder="business name" ></input>
        <input placeholder="town"></input>
        <input placeholder="website" ></input>
        <button onClick={handleSignUp}>Sign Up!</button>
    </form>
    <br />
    <Link to="/Login">Or, Log In?</Link>

    </>
)
}

export default Register;