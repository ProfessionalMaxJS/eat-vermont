import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function BusinessPage(){

    const id = useParams().id
    const [business, setBusiness] = useState({})

    useEffect(()=>{
        fetch(`/backend/businesses/${id}`)
        .then(r=>r.json())
        .then(d=>{//console.log(d)
                    setBusiness(d)})
    }, [id])

    return(
        <>
        <h1>{business.business_name}</h1>
        <a href={`http://${business.link}`}>{business.link}</a>
        </>
    )
}

export default BusinessPage;