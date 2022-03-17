import {Link, useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import JobCard from './JobCard'

function BusinessPage({loggedIn, setLoggedIn}){

    const id = useParams().id
    const [business, setBusiness] = useState({})
    const [postedJobs, setPostedJobs] = useState([])

    useEffect(()=>{
        fetch(`/backend/businesses/${id}`)
        .then(r=>r.json())
        .catch(err=>alert(err))
        .then(d=>{//console.log(d)
                    setBusiness(d)
                    setPostedJobs(d.jobs)})

        fetch('/backend/user_id')
        .then(r=>r.json())
        .catch(err=>alert(err))
        .then(d=>{//console.log(d)
                setLoggedIn(d.user_id)
            })
    }, [id, setLoggedIn])

    const toHome = useNavigate();
const handleLogout = () =>{
    fetch("/backend/logout"
    , {
        method: "DELETE",
      })
        // .then((r) => r.json())
        // .catch((err) => alert(err))
        .then((d) => {//console.log(d)
                    setLoggedIn(0);
                    toHome("/")
        })
}

    return(
        <>
        <h1>{business.business_name}</h1>
        <a href={`http://${business.link}`}>{business.link}</a>
        <br /><br />
        <p style={{textDecoration:'underline'}}>Posted Job Openings</p>
        {postedJobs.length ? postedJobs.map(pJ=>{
            return <JobCard key={pJ.id} job={pJ} />
            }) : <p>This Business doesn't have any available jobs right now.</p>}
         <br />
        <Link to="/">All Jobs</Link><br />
        <Link to={loggedIn==id && `/Account/${id}`} >{loggedIn==id && "Post Jobs and Edit Account Details"}</Link>
        <br />
        {loggedIn==id && <button onClick={handleLogout}>Logout</button>}
        </>
    )
}

export default BusinessPage;