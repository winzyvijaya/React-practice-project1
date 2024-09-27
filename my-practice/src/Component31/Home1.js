
import {Link, useLocation} from 'react-router-dom';
function Home1(){
  const location = useLocation();
  console.warn(location)
    return(
        <div>
            <h1>Home Page</h1>
            <p>Hello, this is Home page</p>
            <p>we are here for learning React routing</p>


            <Link to='/About1'>Go to About1 Page</Link>
        </div>
    );
}
export default Home1;