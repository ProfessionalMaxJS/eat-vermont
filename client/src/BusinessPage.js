import {Link, useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import JobCard from './JobCard'

function BusinessPage({loggedIn, setLoggedIn}){

    const id = useParams().id
    const [business, setBusiness] = useState({})
    const [postedJobs, setPostedJobs] = useState([])
    const [takenDownJob, setTakenDownJob] = useState({job_id:0, job_filled_here: false })

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
    }, [id, setLoggedIn, setPostedJobs])

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

    function deleteMe(){

        // console.log(takenDownJob)
        if(!takenDownJob.job_id){
        return alert("Sorry, please answer our survey first")
        }
 
        fetch(`/admin/taken_down_jobs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(takenDownJob),
            })
            .then(r=>r.json())
            .catch(err=>alert(err))
            .then(d=>{//console.log(d)
                setPostedJobs(d)
            })
        
      }

    return(
        <>
        <div id="business-head">
        <h1 >{business.business_name}</h1>
        <h2>{business.town}</h2>
        <a href={`http://${business.link}`}>{business.link}</a>
        <br /><br />
        <p style={{textDecoration:'underline'}}>Posted Job Openings</p>
        </div>
        {postedJobs.length ?
                       
        postedJobs.map(pJ=>{
            
            return <div key={pJ.id}><JobCard job={pJ} business={business} /> {id==loggedIn && 
            <form >
            <p>To take down <span style={{fontWeight:800}}>{pJ.position}</span>: was the position filled with a candidate from Eat Vermont?</p>
            <input type="radio" name="deleteable" id="false" value={false} onChange={(e)=>{setTakenDownJob({...takenDownJob, job_filled_here: e.target.value, job_id: pJ.id})}} />
            <label  >No</label>
            <input type="radio" name="deleteable" id="true" value={true} onChange={(e)=>{setTakenDownJob({...takenDownJob, job_filled_here: e.target.value, job_id: pJ.id})}} />
            <label >Yes</label>
            &nbsp;
            <input type="button" value="Delete" onClick={()=>deleteMe(pJ.id)} />
            </form>}
            </div>
        }) 
            
            : <p>This Business doesn't have any available jobs right now.</p>} {/*Ternary Statement to prevent the page from freezing if(!jobs.length)*/}
         

         <br />
        <Link to="/">All Jobs</Link><br />
        <Link to={loggedIn==id && `/Account/${id}`} >{loggedIn==id && "Post Jobs and Edit Account Details"}</Link>
        <br />
        {loggedIn==id && <button onClick={handleLogout}>Logout</button>}
        </>
    )
}

export default BusinessPage;