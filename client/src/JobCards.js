import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import JobCard from './JobCard';

function JobCards(){
    
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch('/backend/jobs')
        .then(r=>r.json())
        .then(d=>{//console.log(d)
            setJobs(d)
        })
    }, [])


    return(
        <>
            <Link to="/Login">Login</Link>

            {jobs.map(job=>{
            return <JobCard key={job.id} job={job} />
            })}
        </>
    )
}

export default JobCards;