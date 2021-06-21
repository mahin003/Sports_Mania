import React, { useEffect, useState } from 'react';
import LeagueList from '../LeagueList/LeagueList';
import './League.css';

const League = () => {
    const [team,setTeam]=useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res=>res.json())
        .then(data=>setTeam(data.leagues.slice(0,40)))
        .catch(error => console.log("lg.js ",error))
    },[])
    //console.log("lng ",team.length)
    return (
        <div >
        <div className="LeagueCollection d-flex">
            {team.map(team =><LeagueList team={team}></LeagueList>)}
        </div>
        </div>
    );
};

export default League;