import React,{PureComponent} from 'react';
import Purecomp220 from './Purecomp220';
{/* pure component not rerendering if the value not updated */ }
class Purecpm22 extends React.Component{
    constructor(){
        super();
        this.state={
            count:1
        }

    }
  
    render(){
         
        return(
            <div>
                
                <Purecomp220 count={this.state.count}/>
                <button onClick={()=>this.setState({count:1})}>Update Me!</button>
            </div>
        );
    }
}
export default Purecpm22;