import React from 'react'
/*Hide and Show with two buttons*/
function Hideshow7(){
 const[status, setStatus]=React.useState(false)


    return(
        <div>
            {
                status?
                <h1>hello there!</h1>:null
            }
            
            {/*<button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button>*/}
            <button onClick={()=>setStatus(!status)}>toggle</button>   {/*hide and show with one button or toggle*/}
        </div>
    )
}


export default Hideshow7;