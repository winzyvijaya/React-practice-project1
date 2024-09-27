import {Link} from 'react-router-dom';

function About(){
    return(
        <div>
       <h1>About Page</h1>
       <p>Here we are in About page we can use link here for redirecting to another page </p>
            <p>So lets get strted </p>
            <Link to="/">Home</Link>
            <li><a href='/User/Vijaya'>Vijaya</a></li>
         <li><a href='/User/Rushika'>Rushika</a></li>
            </div>
    );
}
export default About;