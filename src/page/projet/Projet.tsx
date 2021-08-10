import React from 'react';
import {} from "react-router-dom";
import './../css/Projet.min.css';
import ProjetType from "../../json/projets";
import {useParams} from "react-router-dom";

interface ParamsRoute {id:string};
interface Props {data:Array<ProjetType>}

const Content: React.FC<Props> = props => {
    const params = useParams() as ParamsRoute;
    const projetData = 
        props.data[+params.id];

    return (
        <article className="projetWrapper">
            <a href={projetData.link} className="linkToProject bgPurple" target="_blank" rel="noreferrer"> Voir le projet </a>
            {projetData.content3.map((c, i) => (<p key={"c"+i}>{c}</p>))}
        </article>
    );

}




export default Content;
