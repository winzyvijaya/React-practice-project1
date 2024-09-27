
import {Table} from 'react-bootstrap';

function Mapfunc18(){
   
   //const student=['vijaya','Poonam','Kajal','Divya'];
   const student=[
    {name:"vijaya",email:"vijaya@123",cont:12345 },
    {name:"Chanda",email:"Chanda@123",cont:98765 },
    {name:"Poonam",email:"Poonam@123",cont:34545 },
    {name:"Geeta",email:"geeta@123",cont:98345 }
   ]

{/*this is not the correct way to write map fuction we can add map function to the return 
statment map function allow return but for loop doesnt allow it
   student.map((item)=>{
          console.warn("may name is:",item)
   });

    for(let i=0; i<student.length;i++)
    {
           console.warn("in for loop my nameis :",student[i])
    }
*/}

    return(
        <div>
           <h1>Array with List</h1>
         {/* this is the correct way to write*/ }
         {
           // student.map((data)=>
                //<h1>{data}</h1> )
           
         }
         <table>
            <tbody>
         <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Contact</td>
            </tr>
         {
            student.map((data,i)=>
            <tr key={i}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.cont}</td>
            </tr>
             
            )
          
           
         }
         </tbody>
         </table>
        </div>
    );
    
}
export default Mapfunc18;