import React from 'react'
import { Table} from 'react-bootstrap'
function NastedArray19() {
    const info = [
        {
            name: 'vijaya', email: 'vijaya@123',
            Address: [
                { HN: '13', city: 'sangli', State: "maharashtra" },
                { HN: '15', city: 'karnataka', State: "Up" },
                { HN: '16', city: 'kerala', State: "maharashtra" },
                { HN: '17', city: 'thane', State: "maharashtra" },
            ]
        },
        {
            name: 'Divya', email: 'divaya@123', 
            Address: [
                { HN: '1', city: 'sangli', State: 'Up' },
                { HN: '3', city: 'sangli', State: "Mp" },
                { HN: '130', city: 'shigaon', State: "karnataka" },
                { HN: '135', city: 'Ashta', State: "maharashtra" }
            ]
        },
        {
            name: 'Anaya', email: 'anaya@123', 
            Address: [
                { HN: '56', city: 'vadgaon', State: "maharashtra" },
                { HN: '209', city: 'miraj', State: "maharashtra" },
                { HN: '246', city: 'ahegaon', State: "maharashtra" },
                { HN: '68', city: 'manpa', State: "maharashtra" },
            ]
        },
        {
            name: 'jaya', email: 'jaya@123', 
            Address: [
                { HN: '681', city: 'manpa', State: "maharashtra" },
                { HN: '682', city: 'manpa', State: "Karnataka" },
                { HN: '683', city: 'manpa', State: "Karnataka" },
                { HN: '684', city: 'manpa', State: "Karnataka" },

            ]
        }
    ]
    return (

        <div>
            <h1>this is the nasted array</h1>
            <Table variant='dark'striped>
            
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                    {
              info.map((item,i)=>
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    {
                        item.Address.map((data,f)=>
                        <Table variant='dark'striped>
                            <tbody>
                        <tr key={f}>
                        <td>{data.HN}</td>
                        <td>{data.city}</td>
                        <td>{data.State}</td>
                        </tr>
                        </tbody>
                        </Table>
                        )
                        
                    }
                  
                  </tr>
              )
            }
                </tbody>
           
            </Table>
        </div>
    );
}
export default NastedArray19;