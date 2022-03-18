import {useNavigate} from 'react-router-dom'
// import {Link} from 'react-router-dom'

function JobCard({job}){
    // console.log(job)
    const toJob = useNavigate();

    return(
        <>
        <div className="job-card" onClick={()=>toJob(`/Job/${job.id}`)} >
            <h2>{job.position}</h2>
            {/* <h3>{job.business.business_name}, {job.business.town}</h3> */}
            <h4>{job.rate}/hr</h4>
            </div>
        </>
    )
}

export default JobCard;