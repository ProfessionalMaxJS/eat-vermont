import {useNavigate} from 'react-router-dom'
// import {Link} from 'react-router-dom'

function JobCard({job}){

    // console.log(job)
    const toJob = useNavigate();

    return(
        <>
        <p style={{cursor:"pointer"}} onClick={()=>toJob(`/Job/${job.id}`)} >{job.position}</p>
        </>
    )
}

export default JobCard;