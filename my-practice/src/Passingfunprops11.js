

function Passingfunprops11(props){
    return(
        <div>
            <h1>passing function as props</h1>
            <button onClick={()=>props.data()}>call data function </button>
        </div>
    );
}
export default Passingfunprops11;