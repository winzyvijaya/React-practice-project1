import logo from './logo.svg';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import HeaderContainer from './Component/HeaderContainer';
//import Firstredux1 from './Fisrtredux1';
{/*<Firstredux1 data={{name:"vijaya", age:"25"}}></Firstredux1>*/}

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
          <HeaderContainer></HeaderContainer>
           <HomeContainer></HomeContainer>
    </div>
    
  );
}

export default App;
