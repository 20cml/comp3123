import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greetings from './components/Greetings';
import SayHello from './components/SayHello';

function App() {
  return (<div className="App">
    <img src={logo} alt='App Logo'/>
    <h1>Hello</h1>
    <h1>Test</h1>
    <Welcome></Welcome>
    <Greetings name="GBC"/>
    <SayHello  fname="Camila" lname="Lee"/>
    <SayHello fname="Mox" lname="Cha"/>
    <SayHello fname="Test" lname="Test"/>
    </div>)
}

export default App;
