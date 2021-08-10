import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import ProjetType from "./json/projets";
//HOME
import HomeContact from './page/home/Contact';
import HomeJob from './page/home/Job';
import HomeProfil from './page/home/Profil';
import HomeProjets from './page/home/Projet';
import HomeSkill from './page/home/Skill';
//PROJET
import ProjetTag from './page/projet/Tag';
import ProjetProfil from './page/projet/Profil';
import ProjetContent from './page/projet/Projet';
import ProjetPicture from './page/projet/Picture';


const App = () => {
  const data = require ("./json/projets.json") as Array<ProjetType>;
  return (
    <Router>
      
        {/* HOME */}
        <Route path='/' exact render = { () =>
        <div className="container CHome">
          <Fragment>
            <HomeProfil />
            <HomeJob />
            <HomeSkill />
            <HomeContact />
            <HomeProjets data={data} />
            <article className="breath bg-hachure ClipHalfBlock"></article>
          </Fragment>
        </div>
        }/>

        {/* PROJETS */}
        <Route path='/projets/:id' exact render = { () =>
        <div className="container CProjets">
            <Fragment>
              <ProjetProfil data={data} />
              <ProjetTag data={data} />
              <ProjetContent data={data} />
              <ProjetPicture data={data} />
              <Link to={"/"} className="backToHome bgFullPurple"><i className="fas fa-arrow-left"></i></Link>
            </Fragment>
        </div>
        }/>

    </Router>
  );
}

export default App;
