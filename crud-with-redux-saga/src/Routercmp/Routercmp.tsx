//import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "../Login";
import Dashbord from '../Dashbord'
import Appointment from "../Pages/Appointment";


const Routercmp = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/" element={<Dashbord />} />
                    <Route path="/Appointment" element={<Appointment />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default Routercmp;