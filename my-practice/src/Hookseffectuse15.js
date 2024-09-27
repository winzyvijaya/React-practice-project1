
import React,{useEffect,useState}  from 'react'

function Hookseffectuse15 (){
  const[count,setCount]=useState(0)
   useEffect(()=>{

    console.warn("useEffect")
   })
    return(
        <div>
            <h1>this is a useEffect exapmle: {count}</h1>
            <button onClick={()=>setCount(count+1)}>use me!</button>

        </div>
    );
}
export default Hookseffectuse15;