import React,{useState} from 'react'
{/*if we can if else if condition then we can use this logic or method*/ }

function Conditionpractice9(){
 const[logedin,setLogedin]=useState(1)
{/*if we have to use if else condition we can use like this
logedin?<h1>welcome buddy!</h1>:<h1>welcome sir</h1>*/}
    return(
        <div>
            {logedin==1?<h1>hello user1</h1>:logedin==2?<h1>hello user2</h1>
            :<h1>hello user3</h1>
            }
        </div>
    );
}
export default Conditionpractice9;