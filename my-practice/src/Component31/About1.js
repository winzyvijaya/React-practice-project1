import {Link} from 'react-router-dom';
function About1(){

    return(
        <div>
            <h1>About1 Page</h1>
            <p>Hello, this is About1 page</p>
            <p>we are here for learning React routing</p>


            <Link to='/About1'>Go to About1 Page</Link>
        </div>
    );
}
export default About1;