import {Link, Outlet} from 'react-router-dom';
function Contact1(){
 

    return(
        <div>
            <h1>Contact1 Page</h1>
           <p>Hello, this is Contact1 page</p>
            <p>we are here for learning React routing</p>
            <Link to ="Company1">Company1</Link>
            <br />
            <Link to ="Channel1">Channel1</Link>
            <br />
            <Link to ="Other1">Other1</Link>
            <br />

            <Outlet></Outlet>
        </div>
    );
}
export default Contact1;