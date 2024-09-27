import React, { useState } from "react";

function Postapi32(){
    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");
    

    function vijaya(){
        console.warn({title,body});
        let data={title,body}
        fetch("http://localhost:3000/posts",{
           method:'POST',
           header:{
            'Accept':'application/json',
            'Content-Type':'application/json'
           },
           body:JSON.stringify(data)
        }).then((result)=>{
            //console.warn("result",result)
            result.json().then((resp)=>{
                console.warn("resp",resp)
            })
        })

        }
    

    return(
        <div>
            <h1>Post Api</h1>
            <input type="text" name="name" value={title} onChange={(e)=>setTitle(e.target.value)}/><br /><br/>
            <input type="text" name="Email" value={body} onChange={(e)=>setBody(e.target.value)}/><br /><br/>
            
            <button onClick={vijaya}>Save new user</button>
        </div>
    );
}
export default Postapi32;