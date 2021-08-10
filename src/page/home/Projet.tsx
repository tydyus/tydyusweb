import React from 'react';
import { Link } from "react-router-dom";
import './../css/Home.min.css';
import ProjetType from "../../json/projets";

interface Props {data:Array<ProjetType>}

const Projets: React.FC<Props> = props => {

    const projetsData = require ("../../json/projets.json") as Array<ProjetType>;

    let style: Array<Object> = [];
    projetsData.forEach((projet) => {
        style.push({
            backgroundColor: projet.imageFond,
            backgroundImage: "url(./images/" + projet.image + ")",
            backgroundSize:"cover",
            backgroundPosition: "center",
        })
    });

    return (
        <div className="projetsWrapper">
        {projetsData.map((projet, index) => 
                <article key={"p"+index} className={"projet p"+index} > 
                    <Link to={"/projets/"+index}>
                        <div className="trigger"></div>
                    </Link>
                    <div className="fond" style={style[index]}></div>
                    <div className="voile"></div>
                    <h2>{projet["title"]}</h2>
                    <p>{projet["content1"]}</p>
                    <br />
                    {projet["content2"].map((text, i )=> <p key={"c"+i}>{text}</p>)}
                </article>
        )}
        </div>
    );

}




export default Projets;
