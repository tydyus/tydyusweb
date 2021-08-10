import React from 'react';
import './../css/Projet.min.css';
import ProjetType from "./../../json/projets";
import {useParams} from "react-router-dom";

interface ParamsRoute {id:string}
interface Props {data:Array<ProjetType>}

const Picture:React.FC<Props>= props => {
    const params = useParams() as ParamsRoute;
    const projetData = 
        props.data[+params.id];
    const style = {
        backgroundImage: "url(../../images/" + projetData.image + ")",
        backgroundSize:"cover",
        backgroundPosition: "center",
    }
    return (
        <article className="pict" style={style} >
            
        </article>
    );
}

export default Picture;
