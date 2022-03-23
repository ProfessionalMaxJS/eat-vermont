import {useNavigate} from 'react-router-dom'
// import {Link} from 'react-router-dom'

function JobCard({job, business}){
 
    const toJob = useNavigate();

    return(
        <>
        <div className="job-card" onClick={()=>toJob(`/Job/${job.id}`)} >
            <h2>{job.position}</h2>
            <h3>{`${business.business_name}, ${business.town}`}</h3>
            <h4>${job.rate} /hr</h4>
            </div>
        </>
    )
}

export default JobCard;