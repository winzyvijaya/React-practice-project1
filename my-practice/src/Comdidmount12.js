import React from 'react';

class Compdidmount12 extends React.Component{
    constructor(){
        super();
         this.state={
            name:"vijaya"
         }
        
    }
    componentDidMount(){
         console.warn("componentDidMount")
    }
    render(){
        console.warn("render")
        return(
            <div>
                <h1>component Did Mount{this.state.name}</h1>
            </div>
        );
    }
}
 export default Compdidmount12;