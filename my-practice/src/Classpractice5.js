import React from 'react'

class Classpractice5 extends React.Component{
 constructor(){
      super();
      this.state={
        name:"shreya"
      }
 }
render(){
    console.log(this.props)
    return(
        <div style={{backgroundColor:"purple", margin:'20'}}>
            <h2>Props!</h2>
            <h1>name={this.state.name}</h1>
            <button onClick={()=>this.setState({name:"vijaya"})}>click me!</button>
        </div>
    );
}
}
export default Classpractice5;