import React from 'react'

class Comdidupdate13 extends React.Component{

    constructor(){
        console.warn("constructor")
      super();
      this.state={
        count:0
      }

    }
    componentDidUpdate(preProps,preState,snapshot){
         console.warn("componentDidUpdate",preState.count,this.state.count)
         if(this.state.count<10)
         {
           this.setState({count:this.state.count+1})
         }
    }
    render(){
        console.warn("render")
        return(
            <div>
                <h1>Component Did Update{this.state.count}</h1>
                <button onClick={()=>{this.setState({count:1})}}>Upadte state</button>
            </div>
        );
    }
}
export default Comdidupdate13;