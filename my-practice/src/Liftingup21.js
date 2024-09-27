

function Liftingup21 (props){
 const data="vijaya patil"
    return(
        <div>
            <h1>User :</h1>
            <button onClick={()=>props.alert(data)}>Click Me!</button>
        </div>
    );
}
export default Liftingup21;