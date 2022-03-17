import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import JobCard from './JobCard';

function JobCards({loggedIn, setLoggedIn}){
    
    const [jobs, setJobs] = useState([])
 
    useEffect(()=>{
        fetch('/backend/jobs')
        .then(r=>r.json())
        .then(d=>{//console.log(d)
            setJobs(d)
        })

        fetch('/backend/user_id')
        .then(r=>r.json())
        .catch(err=>alert(err))
        .then(d=>{console.log(d)
                setLoggedIn(d.user_id)
            })

    }, [])

    const toMyAccount = useNavigate(``)

    return(
        <>

            {!loggedIn && <Link to="/Login">Login</Link>}&nbsp;&nbsp;&nbsp; 
            {!loggedIn && <Link to ="/Signup">Sign Up</Link>}
            {loggedIn && <p id="stubborn-link" onClick={()=>toMyAccount(`/Business/${loggedIn}`)}  >My Account</p>}
           {jobs.length ? jobs.map(job=>{
            return <JobCard key={job.id} job={job} />
            }) : <p>There are no posted, available jobs right now. Check back soon!</p>}
        </>
    )
}

export default JobCards;