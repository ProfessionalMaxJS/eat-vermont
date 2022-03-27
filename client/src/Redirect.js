import {Link} from 'react-router-dom'

function Redirect(){

    return(
        <>
        <p>Sorry, this route does not seem to exist <br /></p>
        <Link to="/">Home</Link>
        </>
    )
}

export default Redirect;