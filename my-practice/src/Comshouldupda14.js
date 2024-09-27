import React from 'react'

class Comshouldupda14 extends React.Component{

    constructor(){
        super();
        this.state={
           count:0
        }
    }
     shouldComponentUpdate()
     {
        console.warn("shouldComponentUpdate",this.state.count);
        
        if(this.state.count<10 && this.state.count>5)
        {
            return(true)
        }
     }

    render(){

        return(
            <div>
                <h1>Component Should Update{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update me!</button>
            </div>
        );
    }
}

export default Comshouldupda14;