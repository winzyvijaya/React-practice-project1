import React, { useState } from 'react';

function Previousestate35(){
   const[points,setPoints]=useState(1);
   function User(){
    {/*let rando=Math.floor(Math.random()*10)
    setPoints((pre)=>{
        console.warn(pre)
        if(pre<5)
        {
          alert("low value")
        }
        return rando;
    })*/}
    for(let i=0; i<5; i++)
    {
        setPoints((pre)=>
        {
            return pre+1
        })
    }
    
    
   }
   return(
    <div>
        <h1>Previouse state:  {points}</h1>
        <button onClick={User}>Update Previouse state</button>
    </div>
   );
}

export default Previousestate35;