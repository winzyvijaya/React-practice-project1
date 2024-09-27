import React,{useState} from 'react'
function Propspractice4 (props){
 const[Data,setData]=useState("geeta")

 
 console.log(props)
    return(
        <div style={{backgroundColor:"skyblue", margin:'10'}}>
             <h1>{Data}</h1>
            <button onClick={()=>{setData("Germany")}}>Update Me!</button> 
          
        </div>
    );
}
export default Propspractice4;