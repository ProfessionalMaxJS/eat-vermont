
function Register(){

return(
    <>
    {/* <h1>elloGuvnah!!</h1> */}

    <form style={{display:"flex", flexDirection:'column', width:"35vw"}} > 
        <input placeholder='email address' ></input>
        <input placeholder="password"></input>
        <input placeholder="password confirmation"></input>
        <input placeholder="business name" ></input>
        <input placeholder="town"></input>
        <input placeholder="website" ></input>
        <button>Sign Up!</button>
    </form>

    </>
)
}

export default Register;