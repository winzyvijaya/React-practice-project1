
//  const Dashbord=()=>{
// return(
//     <div>
//         <h1>Hello Dashbord</h1>
//     </div>
// )
// }
// export default Dashbord;
import React from 'react';
// import { Link, Route} from 'react-router-dom';
// import {Switch} from 'react-router-dom';
import {  Link, Routes, Route } from 'react-router-dom';
import Logout from '../Logout';
import ContactUs from '../ContactUs';
import Appointment from '../Pages/Appointment';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/appointment">Appointment</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/logout" element={<Logout/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/appointment" element={<Appointment/>} />
      </Routes>
    </div>
  );
};

export default Dashboard;