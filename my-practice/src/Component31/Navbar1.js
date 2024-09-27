import { NavLink } from "react-router-dom";

function Navbar1(){
    return(
        <div>
            <ul>
        <li><a href='/Home1'>Home1</a></li>
         <li><a href='/About1'>About1</a></li>
         <li><a href='/Contact1'>Contact1</a></li>
         <li><a href='/User/Vijaya'>Vijaya</a></li>
         <li><a href='/User/Rushika'>Rushika</a></li>
         <li><NavLink to="/Login"/>Login</li>
         
         </ul>

        </div>
    );
}
export default Navbar1;
