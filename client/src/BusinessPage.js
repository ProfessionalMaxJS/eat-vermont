import {Link, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import JobCard from './JobCard'

function BusinessPage(){

    const id = useParams().id
    const [business, setBusiness] = useState({})
    const [postedJobs, setPostedJobs] = useState([])

    useEffect(()=>{
        fetch(`/backend/businesses/${id}`)
        .then(r=>r.json())
        .then(d=>{console.log(d)
                    setBusiness(d)
                    setPostedJobs(d.jobs)})
    }, [id])
   

    return(
        <>
        <h1>{business.business_name}</h1>
        <a href={`http://${business.link}`}>{business.link}</a>
        <br /><br />
        <p style={{textDecoration:'underline'}}>Posted Job Openings</p>
        {postedJobs.map(pJ=>{
            return <JobCard key={pJ.id} job={pJ} />
            })}
         <br />
        <Link to="/">All Jobs</Link>
        </>
    )
}

export default BusinessPage;