import React, { useState } from 'react'

function Inputpractice6(){
 const[data,setData]=useState(null)
 const[print,setPrint]=useState(false)
 function getData(val){
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
 }



    return(
        <div>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <input type="text" onChange={getData}></input>
            <button onClick={()=>setPrint(true)}>Print data</button>

        </div>
    );
}
export default Inputpractice6;