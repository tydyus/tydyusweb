import React from 'react';

const Skill:React.FC = _ => {
  return (
    <article className="pj bg-hachure flexCenter flexWrap fCol fAlignCenter">
        <div className="flex">
            <div className="skill"><i className="fab fa-html5"></i><span><p>HTML5</p></span></div>
            <div className="skill"><i className="fab fa-css3-alt"></i><span><p>CSS3</p></span></div>
        </div>
        <div className="skill"><i className="fab fa-js-square"></i><span><p>JavaScript + TypeScript</p></span></div>
        <div className="flex">
            <div className="skill"><i className="fab fa-react"></i><span><p>react</p></span></div>
            <div className="skill"><i className="fab fa-symfony"></i><span><p>Symfony</p></span></div>
        </div>
        <div className="skill"><i className="fab fa-python"></i><span><p>Python</p></span></div>
        <div className="flex">
            <div className="skill"><i className="fas fa-palette"></i><span><p>Illustrations</p></span></div>
            <div className="skill"><i className="fas fa-cubes"></i><span><p>Assets 3D</p></span></div>
        </div>
    </article>
  );
}

export default Skill;
