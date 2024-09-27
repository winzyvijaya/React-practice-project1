import {useParams}from 'react-router-dom'

function User(){
    const params =useParams();
    const{name} = params
    console.warn(name)
    return(
        <div>
            <h2>This is {name}'s Page</h2>
        </div>
    );
}
export default User;