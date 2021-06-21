import React from 'react';
import { useParams } from 'react-router';
import  { useEffect, useState } from 'react';
import Detailsblock from '../DetailsBlock/Detailsblock';
import "./LeagueDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube ,faTwitter} from "@fortawesome/free-brands-svg-icons"

const LeagueDetails = () => {
    const {leagueId}= useParams();
    console.log(leagueId);
    const [details,setDetails]=useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setDetails(data.leagues[0]);
                console.log(data.leagues[0]);
            }
            )
            .catch(error => console.log(error))
    },[])

    return (
        <div>           
            <Detailsblock info={details}></Detailsblock>
            <div className="Text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis nesciunt minus dignissimos excepturi voluptates repudiandae aperiam dolore in, exercitationem accusamus id possimus sunt facilis praesentium cum fuga enim dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis nesciunt minus dignissimos excepturi voluptates repudiandae aperiam dolore in, exercitationem accusamus id possimus sunt facilis praesentium cum fuga enim dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nobis nesciunt minus dignissimos excepturi voluptates repudiandae aperiam dolore in, exercitationem accusamus id possimus sunt facilis praesentium cum fuga enim dolorum.</p>
            </div>
            <div className="Logo">
                
                <a href={"https://"+details["strFacebook"]} target="_blank">
               <FontAwesomeIcon icon={faFacebook} size="2x" color="blue"></FontAwesomeIcon>
               </a>
               <a href={"https://"+details["strTwitter"]} target="_blank">
               <FontAwesomeIcon icon={faTwitter} size="2x" color="blue"></FontAwesomeIcon>
               </a>
               <a href={"https://"+details["strYoutube"]}>
               <FontAwesomeIcon icon={faYoutube} size="2x" color="red" target="_blank"></FontAwesomeIcon>
               </a>
            </div>
        </div>
    );
};

export default LeagueDetails;