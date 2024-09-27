
import React, { useEffect, useState } from 'react'
function Update34() {
  const [users, setUser] = useState([])
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:3000/posts").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setTitle(resp[0].title)
        setBody(resp[0].body)
        setUserId(resp[0].id)
      })
    })
  }

  function deleteUser(id) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  function selectUser(id)
  {
    let item=users[id-1];
    setTitle(item.title)
        setBody(item.body)
        setUserId(item.id)
  }
  function updateUser()
  {
    let item={title,body}
    console.warn("item",item)
    fetch(`http://localhost:3000/posts/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div>
      <h1>Update User Data With API </h1>
      <table border="1" style={{ float: 'left' }}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Body</td>
            <td>Operations</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                <td><button onClick={() => selectUser(item.id)}>Update</button></td>

              </tr>
            )
          }
        </tbody>
      </table>
      <div>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} /> <br /><br />
        <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} /> <br /><br />
        
        <button onClick={updateUser} >Update User</button>  
      </div>
    </div>
  );
}
export default Update34;