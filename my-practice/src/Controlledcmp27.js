import React, { useState } from "react";

function Controlledcmp27()
{
let [val,setVal]=useState("000")

    return(
        <div>
            <h1>Controlled Component </h1>
            <input type="text" value={val} onChange={(e)=>(setVal(e.target.value))}/>
              <h3>value {val}</h3>
        </div>
    );
}
export default Controlledcmp27;