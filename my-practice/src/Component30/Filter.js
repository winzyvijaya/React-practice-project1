import {useSearchParams}from 'react-router-dom'

function Filter(){
const[value, setValue] = useSearchParams()
console.warn(value.get('age'))
    return(
        <div>
            <h1>Filter Page</h1>
        </div>
    );
}
export default Filter;