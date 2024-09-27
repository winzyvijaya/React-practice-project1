import React, { useState } from 'react';
function Hocexample29 (){
    return(
        <div>
            <h2>HOC</h2>
            <HOCRed cmp={Main}/>
            <HOCGreen cmp={Main}/>
            <HOCBlue cmp={Main}/>
        </div>
    );
    function HOCRed(props){
        return(
            <h3 style={{backgroundColor:'Red',width:100}}><props.cmp/></h3>
        )
    }
    function HOCGreen(props){
        return(
            <h3 style={{backgroundColor:'Green',width:100}}><props.cmp/></h3>
        )
    }
    function HOCBlue(props){
        return(
            <h3 style={{backgroundColor:'Blue',width:100}}><props.cmp/></h3>
        )
    }

    function Main(){
        const[item,setItem]=useState(0)
        return(
            <div>
                <h2>Value:  {item}</h2>
                <button onClick={()=>setItem(item+1)}>Update</button>
            </div>
        );
    }
}


export default Hocexample29;