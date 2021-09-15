import React from 'react';
import ProjetType from "./../../json/projets";
import {useParams} from "react-router-dom";

interface ParamsRoute {id:string};
interface Props {data:Array<ProjetType>}

const Tag:React.FC<Props> = props => {
  const params = useParams() as ParamsRoute;
  const projetData = 
    props.data[+params.id];

  return (
    <article className="if bgPurple">
        <h2>{projetData.tag}</h2>
    </article>
  );
}

export default Tag;
