import React from 'react';
/*class with function*/
class ClassPractice3 extends React.Component{
    constructor(){
        super();
        this.state={
            data:"Vijaya"/*if ou want to increase the data lrt initial value=0and below in function we have change*/ 
        }
    }
    apple()/* why we are not able to type function for function apple why its showing error when we type function?*/
    {
        this.setState({data:"Chanda"})/*({data:this.state.data+1})*/ 
    }
    render(){
        return(
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>update me!</button>
            </div>
        )
    }
}

    export default ClassPractice3;