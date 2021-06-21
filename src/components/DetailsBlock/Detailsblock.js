import React from 'react';
import femaleImage from "../../images/female.png";
import maleImage from "../../images/male.png";
import "./Detailsblock.css";
const Detailsblock = (props) => {
    console.log("props ", props);
    return (
        <div className="Container">
            
            <div className="Details">
                <h3>{props.info["strLeague"]}</h3>
                <p>Founded: <b>{props.info["intFormedYear"]}</b></p>
                <p>Country: <b>{props.info["strCountry"]}</b></p>
                <p>sport Type: <b>{props.info["strSport"]}</b></p>
                <p>Gender: <b>{props.info["strGender"]}</b></p>
            </div>
            <div className="Img">
                {
                    props.info["strGender"] === "Male" ? <img src={maleImage} /> : <img src={femaleImage} />

                }
            </div>
        </div>
    );
};

export default Detailsblock;