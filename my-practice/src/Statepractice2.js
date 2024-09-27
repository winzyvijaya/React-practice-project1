import { useState } from "react"
/* state with function*/
function Statepractice2(){
const[data,setData]=useState("Wheels")
function updateData(){
 setData("maria")
}

return(
    <div>
        <h1>this is the state example!</h1>
        <h1>{data}</h1>
        <button onClick={updateData}>use me for update!</button>
    </div>
);
}

export default Statepractice2;