import {useParams, Link, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function JobPage(){

    const id = useParams().id
    const toBizPage = useNavigate();

    const [job, setJob] = useState({})
    const [business, setBusiness] = useState({})

    useEffect(()=>{
        fetch(`/backend/jobs/${id}`)
        .then(r=>r.json())
        .then(d=>{//console.log(d)
                setJob(d)
                setBusiness(d.business)
        })
    },[id])

    return(
        <>
        <h1>{job.position}</h1>
        <h2 style={{cursor:"pointer"}}  onClick={()=>toBizPage(`/Business/${business.id}`)}  >{business.business_name}, {business.town}</h2>
        <h3>{job.hours}/week; ${job.rate}/hr </h3>
        <p>Contact {job.phone} or {job.email} for more info</p>
        <br />
        <Link to="/">All Jobs</Link>
        </>
    )
}

export default JobPage