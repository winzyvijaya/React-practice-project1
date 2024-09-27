import React,{useRef} from 'react';
function Refuse25(){
const inputRef=useRef(null)

function middle()
{
    console.warn("function call")
    //inputRef.current.value="100"
    //inputRef.current.focus();
    //inputRef.current.style.color="red"
    inputRef.current.style.display="none"

}

    return(
        <div>
            <h1>useRef in React</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={middle}>Handle Input</button>
        </div>
    );
}
export default Refuse25;