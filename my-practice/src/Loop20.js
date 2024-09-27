import React from 'react'
import Loopsub201 from './Loopsub201';
function Loop20(){
   const data=[{name:"vijaya", email:"vijaya@erfs",age:13},
   {name:"jaya", email:"jaya@erfs",age:14},
   {name:"Chaya", email:"Chaya@erfs",age:14},
   {name:"Maya", email:"mjaya@erfs",age:15},

]
    return(
        <div>
            <h1>reuse Component in loop</h1>
            {
                data.map((data,i)=>
                <Loopsub201 item={data}/>
                )
            }
        </div>

    );
}
export default Loop20;