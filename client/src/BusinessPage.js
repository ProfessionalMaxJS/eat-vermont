import {Link, useParams, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import JobCard from './JobCard'

function BusinessPage({loggedIn, setLoggedIn}){

    const id = useParams().id
    const [business, setBusiness] = useState({})
    const [postedJobs, setPostedJobs] = useState([])
    const [deleteable, setDeleteable] = useState([false])
    const [visible, setVisible] = useState(false)

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

    function defineMe(e){
        setDeleteable(e.target.value)
        setVisible(true)
    }

    function deleteMe(index){
        // e.preventDefault();
        // console.log(deleteable)
        // console.log(index)
        fetch(`/backend/jobs/${index}`, {
            method: "DELETE",
          })

        fetch(`/backend/businesses/${id}`)
        .then(r=>r.json())
        .catch(err=>alert(err))
        .then(d=>{//console.log(d)
                    setBusiness(d)
                    setPostedJobs(d.jobs)})
      }

    return(
        <>
        <h1>{business.business_name}</h1>
        <a href={`http://${business.link}`}>{business.link}</a>
        <br /><br />
        <p style={{textDecoration:'underline'}}>Posted Job Openings</p>
        {postedJobs.length ? postedJobs.map(pJ=>{
            return <div ><JobCard key={pJ.id} job={pJ} /> {id==loggedIn && 
            <form key={pJ.position} >
            <p>{`To take down ${pJ.position}: was the position filled with a candidate from Eat Vermont?`}</p>
            <input type="radio" name="deleteable" id="false" value={false} onChange={defineMe} />
            <label  >No</label>
            <input type="radio" name="deleteable" id="true" value={true} onChange={defineMe} />
            <label >Yes</label>
            {visible && <input type="button" value="Delete" onClick={()=>deleteMe(pJ.id)} />}
            </form>}
            </div>})
            : <p>This Business doesn't have any available jobs right now.</p>}
         <br />
        <Link to="/">All Jobs</Link><br />
        <Link to={loggedIn==id && `/Account/${id}`} >{loggedIn==id && "Post Jobs and Edit Account Details"}</Link>
        <br />
        {loggedIn==id && <button onClick={handleLogout}>Logout</button>}
        </>
    )
}

export default BusinessPage;