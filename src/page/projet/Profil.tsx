import React from 'react';
import './../css/Projet.min.css';
import ProjetType from "./../../json/projets";
import {useParams} from "react-router-dom";

interface ParamsRoute {id:string};
interface Props {data:Array<ProjetType>}

const Profil:React.FC<Props> = props => {
 const params = useParams() as ParamsRoute;
  const projetData = 
    props.data[+params.id];

  return (
    <article className="mn">
        <h1>{projetData.title}</h1>
        <p>{projetData.content2[projetData.content2.length-1]}</p>
        <br />
        <p>{projetData.content1}</p>
    </article>
  );
}

export default Profil;
