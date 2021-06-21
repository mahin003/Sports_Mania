import React from 'react';
import './LeagueList.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeagueList = (props) => {
    const { idLeague } = props.team;
    //console.log(idLeague)
    const [League, SetLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(idLeague)
                SetLeague(data.leagues[0])
                //console.log(League['strBadge'])
            }
            )

            .catch(error => console.log(error))
    }, [])
    return (
        <div className="LeagueList d-flex flex-column m-2">
            <img src={League['strBadge']} />
            <h5>{props.team.strLeague}</h5>
            <p>Game type : <b>{props.team.strSport}</b></p>
            <button className="explorebtn"><Link to={League['idLeague']}>Explore</Link></button>
        </div>
    );
};

export default LeagueList;