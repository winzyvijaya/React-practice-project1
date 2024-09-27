import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Read from './Read';
import Update from './Update';
import bootstrap from 'bootstrap';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/Create" emenet={<Create/>}></Route>
        <Route path='/Update/:id' element={<Update/>}></Route> 
        <Route path='/Read/:id' element={<Read/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
