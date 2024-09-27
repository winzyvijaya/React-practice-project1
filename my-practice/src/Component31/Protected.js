import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props){
  const{Component}= props
  const navigate= useNavigate
   useEffect(()=>{
    let Login= localStorage.getItem('Login')
    if(!Login){
          navigate('/Login')
    }
   })
    return(
        <div>
            <Component/>
           
        </div>
    );
}
export default Protected;