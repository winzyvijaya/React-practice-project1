
import React, {useEffect, useState} from 'react';
function Getapi(){
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/posts").then((result)=>{
            result.json().then((resp)=>{
             //console.warn("result",resp)
             setData(resp)
    })
    
      })
    },[])
    console.warn(data)
    return(
        <div>
            <h1>API first Method Get Method</h1>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Body</td>
                    
                </tr>
                {
                    data.map((item)=>
                    <tr>
                    <td>{item.Id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    
                </tr>
                    )
                }
            </table>
        </div>
    );
}
export default Getapi;