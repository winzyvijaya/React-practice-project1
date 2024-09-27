import React, { useState } from 'react';

function Deleteapi33(){
    // const [users,setUser]=useState([]);
    const [users,setUser]=useState([]);
    function deleteUser(id)
    {
        fetch('http://localhost:3000/posts',{
            method:'GET'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
            })
        })
    }

    return(
        <div>
            <h1>Delete Data With Api Call</h1>
            <table border="1">
                <tbody>
                <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Body</td>
                   
                </tr>
                {
                    users.map((item,i)=>
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.body}</td>
                        
                        <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                    </tr>
                    )
                }
                
                </tbody>
            </table>
        </div>
    );
}
export default Deleteapi33;