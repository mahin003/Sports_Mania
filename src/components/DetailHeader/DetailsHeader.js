import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./DetailsHeader.css";
const DetailsHeader = () => {
    const {leagueId}= useParams();
    console.log(leagueId);
    const [header,setHeader]=useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setHeader(data.leagues[0]);
                console.log(data.leagues[0]);
            }
            )

            .catch(error => console.log(error))
    },[])
    const imgurl=`../../images/banner.png`;
    const banner={
        backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('+`../../images/banner.png`+')',
        backgroundSize: '100% 248px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        width: '100%'
    };
    return (

        <div >
            <div style={banner}  className="d-flex justify-content-center align-items-center">        
        </div>
        </div>
    );
};

export default DetailsHeader;