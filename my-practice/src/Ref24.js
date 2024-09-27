import React,{createRef} from 'react';

class Ref24 extends React.Component{
constructor()
{
    super();
    this.inputRef=createRef();
}

getVal()
{
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color="red"
    this.inputRef.current.style.backgroundColor="black"
}
render()
{
    return(
        <div>
            <h1>Ref in React</h1>
            <input type="text" ref={this.inputRef}/>
            <button onClick={()=>this.getVal()}>Check Ref</button>
        </div>
    );
}
}
export default Ref24;