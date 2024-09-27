import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ComponentA from './SiblingCmp/ComponentA';
import ComponentB from './SiblingCmp/ComponentB';
//import Getapi from './Getapi';
//import Deleteapi33 from './Deleteapi33';


//import Previousestate35 from './Previousestate35';
//import {useRef} from 'react';
//
//import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
/*import Home from './Component30/Home';
import About from './Component30/About';
import Navbar from './Component30/Navbar';
import Page404 from './Component30/Page404';
import User from './Component30/User';
import './Component30/vijaya.css';
import Filter from './Component30/Filter';
import Postapi32 from './Postapi32';
import Update34 from './Update34';

import Home1 from './Component31/Home1';
import About1 from './Component31/About1';
import Contact1 from './Component31/Contact1';
import Navbar1 from './Component31/Navbar1';
import Company1 from './Component31/Company1';
import Channel1 from './Component31/Channel1';
import Other1 from './Component31/Other1';
import Login from './Component31/Login';
import Protected from './Component31/Protected';*/

;
//import Refuse25 from './Refuse25';






/*import Inputpractice6 from './Inputpractice6';
import Hideshow7 from './Hideshow7'
import Form8 from './Form8';
import Conditionpractice9 from './Conditionpract9';
import Loginvalidation10 from './Loginvalidation10';
import Compdidmount12 from './Comdidmount12';
//import Passingfunprops11 from './Passingfunprops11';
import Practice1 from './Practice1';
import Statepractice2 from './Statepractice2';
import ClassPractice3 from './ClassPractice3';
import Propspractice4 from './Propspractice4';
import Classpractice5 from './Classpractice5';
import Comdidupdate13 from './Comdidupdate13';
import Comshouldupda14 from './Comshouldupda14';
import Hookseffectuse15 from './Hookseffectuse15';
import Hookseffectuse16 from './Hookseffectuse16';
import Mapfunc18 from './Mapfunc18';
import NastedArray19 from './NastedArray19';
import Loop20 from './Loop20';
import Liftingup21 from './Liftingup21';
import Purecmp22 from './Purecmp22';
import Memouse23 from './Memouse23';
import Ref24 from './Ref24';
import Forwordref26 from './Forwordref26';
import Controlledcmp27 from './Controlledcmp27';
import Uncontrolledcmp28 from './Uncontrolledcmp28';
import Hocexample29 from './Hocexample29';

 function parentAlert(data){
  alert(data)
 }
 <h1>Lifting Up</h1>
       <Liftingup21 alert={parentAlert}></Liftingup21>*/

//let data="vijaya patil"

function App() {
  {/* function getData(){
    
      alert("get data from parent component App")
     <Passingfunprops11 data={getData}></Passingfunprops11>
  }*/}
  {/*const[data,setData]=useState(10);
  const[count,setCount]=useState(1000);
import Hookseffectuse17 from './Hookseffectuse17';*/}

{/*const inputRef= useRef(null);
function updateInput()
{
  inputRef.current.value="100"
  inputRef.current.style.color="red"
  inputRef.current.focus()
}
<h1>ForwordRef in react</h1>
     <Forwordref26 ref={inputRef}></Forwordref26>
<button onClick={updateInput}>Update InputBox</button>*/}

// Parent Component

  const [receivedData, setReceivedData] = useState('');

  const handleData = (data) => {
    setReceivedData(data); // Receive data from Sibling A
  };

  // return (
  //   <div>
  //     <SiblingA sendData={handleData} />
  //     <SiblingB receivedData={receivedData} />
  //   </div>
  // );




  return (
    <div className="App">
      <div>
      <ComponentA sendData={handleData} />
      <ComponentB receivedData={receivedData} />
    </div>

      {/* <Practice1></Practice1>
      <Statepractice2></Statepractice2>
      <ClassPractice3></ClassPractice3>
      <Propspractice4></Propspractice4>   
      <Classpractice5  email="vijayaqwe@test.com"></Classpractice5>
  
    <Inputpractice6></Inputpractice6>
    <Hideshow7></Hideshow7>
    <Form8></Form8>
    <Conditionpractice9></Conditionpractice9>
    <Loginvalidation10></Loginvalidation10>
    <Compdidmount12></Compdidmount12>
    <Comdidupdate13></Comdidupdate13>
    <Comshouldupda14></Comshouldupda14>
    <Hookseffectuse15></Hookseffectuse15>
    <Hookseffectuse16></Hookseffectuse16>
    <Mapfunc18></Mapfunc18>
     <NastedArray19></NastedArray19>
     <Loop20></Loop20>
      <Purecmp22></Purecmp22>
      <Memouse23></Memouse23>
        <Ref24></Ref24>
        <Refuse25></Refuse25>
        <Controlledcmp27></Controlledcmp27>
        <Uncontrolledcmp28></Uncontrolledcmp28>
        <Hocexample29></Hocexample29>

  */}
      {/*<Hookseffectuse17 count={count} Data={data}></Hookseffectuse17>
     <button onClick={()=>setData(data+2)}>Add Numbers</button>
     <button onClick={()=>setCount(count+100)}>Add Count</button>*/}
     {/*<BrowserRouter>
     <Link to="/About">About</Link>
     <br/>
     <Link to="/">Home</Link>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
     </Routes>
    </BrowserRouter>*/}
    {/*<BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/User/:name" element={<User/>}></Route>
      {/*<Route path="/*" element={<Page404/>}></Route>
      <Route path="/*" element={<Navigate to='/'/>}></Route>
      
       
     </Routes>
     <Filter></Filter>
    </BrowserRouter>*/}
    {/*<BrowserRouter>
     <Navbar1/>
     <Routes>
      <Route 
      ></Route>
      
      <Route path="/About1" element={<About1/>}>About1</Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home1" element={<Protected component={<Home1/>}/>}>Home1</Route>
      <Route path="/Contact1/" element={<Contact1/>}>Contact1
         <Route path="Company1" element={<Company1/>}></Route>
         <Route path="Channel1" element={<Channel1/>}></Route>
         <Route path="Other1" element={<Other1/>}></Route>
         </Route>
     </Routes>
     
  </BrowserRouter>
  <Getapi></Getapi>
  <Deleteapi33></Deleteapi33>
  <Postapi32></Postapi32>
  <Update34></Update34>
  <Previousestate35></Previousestate35>
  */}
  
  
   
    </div>
  );
}

export default App;
