import React from 'react';

const Contact:React.FC = _ => {
  return (
    <article className="ct contact bgPurple bgFullPurple">
        <h2>CONTACT</h2>
        <p>contact@tydyus.com</p>
        <p>06.58.95.81.72</p>
        <form action="mailto:contact@tydyus.com" method="post" encType="text/plain" className="flex fCol">
            <input type="text" name="FirstName" placeholder="Nom"/>
            <input type="email" name="Email" placeholder="mail@adresse.com"/>
            <input type="submit" name="submit" value="Me contacter" />
        </form>
    </article>
  );
}

export default Contact;
