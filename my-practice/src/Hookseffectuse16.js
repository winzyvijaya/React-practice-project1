import React,{useEffect,useState} from 'react'


function Hookseffectuse16 (){
 const[number,setNumber]=useState(10)
 const[count,setCount]=useState(1000)
  useEffect(()=>{
    console.warn("useEffect called")
  },[number])
  useEffect(()=>{
    alert("countis"+count)
  },[count])
    return(
        <div>
            <h1>this is the useEffect exaple2:: {number}</h1>
            <h1>{count}</h1>
            <button onClick={()=>setNumber(number+2)}>Add Numbers</button>
            <button onClick={()=>setCount(count+100)}>Add Count</button>
        </div>
    );
}
export default Hookseffectuse16;