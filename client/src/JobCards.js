import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import JobCard from './JobCard';

function JobCards({loggedIn, setLoggedIn}){
    
    const [jobs, setJobs] = useState([])
 
    useEffect(()=>{
        fetch('/backend/jobs')
        .then(r=>r.json())
        .then(d=>{console.log(d)
                    setJobs(d)
                })

        fetch('/backend/user_id')
        .then(r=>r.json())
        .catch(err=>alert(err))
        .then(d=>{console.log(d)
                setLoggedIn(d.user_id)
            })

    }, [setLoggedIn])

    // const toMyAccount = useNavigate(``)
    // onClick={()=>toMyAccount(`/Business/${loggedIn}`)}


return(
        <>
        <h1>Welcome to the Eat Vermont Jobs Board!</h1>
            {!loggedIn && <Link to="/Login">Login</Link>}&nbsp;&nbsp;&nbsp; 
            {!loggedIn && <Link to ="/Signup">Sign Up</Link>}
            {loggedIn && <Link to={`/Business/${loggedIn}`}>My Account</Link>}
        <div id="jobs-board" >
           {jobs.length ? jobs.map(job=>{
               return <JobCard key={job.id} job={job} business={job.business} />
            }) : <p>There are no posted, available jobs right now. Check back soon!</p>}
            </div>
        </>
    )
}

export default JobCards;