import React from "react";

class Purecomp220 extends React.Component(){

    render(){
        console.warn("user component check-rerending")
        return(

            <div>
                <h1>User Component {this.props.count}</h1>
                
            </div>
        );
    }
}
export default Purecomp220;