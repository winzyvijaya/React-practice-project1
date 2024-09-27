import {NavLink } from 'react-router-dom';

function Navbar(){
    return(
        <div>
            <ul className='Navbar'>
            
     
     
    
         <li><NavLink
         style={({isActive})=>{return{color:isActive?'purple':'blueviolet'}}}
         className="nav-bar-link" to="/">Home</NavLink></li>
        <li><NavLink
        style={({isActive})=>{return{color:isActive?'purple':'blueviolet'}}}
        className="nav-bar-link" to="/About">About</NavLink></li>
        <li><NavLink
        style={({isActive})=>{return{color:isActive?'purple':'blueviolet'}}}
        className="nav-bar-link" to="/Contact">Contact</NavLink></li>

      
         {/*<li><a href='/'>Home</a></li>
         <li><a href='/About'>About</a></li>
         <li><a href='/Contact'>Contact</a></li>
         <li><a href='/User/Vijaya'>Vijaya</a></li>
         <li><a href='/User/Rushika'>Rushika</a></li>*/}
     </ul>
        </div>
    );
}
export default Navbar;