import React,{useEffect} from 'react'


function Hookseffectuse17(props){
 
  useEffect(()=>{
    alert("this is a data:" + props.data)
  },[props.data])
  
    return(
        <div>
            <h1>Number Props: {props.data}</h1>
            <h1>Count Props: {props.count}</h1>
           
        </div>
    );
}
export default Hookseffectuse17;