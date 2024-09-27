import {useState} from 'react';

function Form8(){
const[name,setName]=useState("");
const[country,setCountry]=useState("");
const[tnc,setTnc]=useState(false);


function getFormData(e){
    console.warn(name,country,tnc)
    e.preventDefault()
}

    return(
        <div>
            <h1>form handler</h1>
            <form onChange={getFormData}>
                <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
                <select onChange={(e)=>setCountry(e.target.value)}>
                    <option>select country</option>
                    <option>America</option>
                    <option>India</option>
                    <option>Use</option>
                </select><br/><br/>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/>agree to our terms and conditions<br/><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form8;