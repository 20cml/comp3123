import logo from './logo.svg';
import './App.css';
import { UserProvider } from './UserContext';
import UserChild1 from './UserChild1';
import UserChild2 from './UserChild2';
import UseEffectExample from './UseEffectExample';

var user = {
  fnm: 'Camila',
  lnm: 'Lee',
  count: 0,
  sayHello: () => {
    console.log('Say Hello')

  }
}

function App() {
  return (
    <div>
      <h1>React Context Examples</h1>
      <UseEffectExample/>
      <UserProvider value={user}>
          <UserChild1 />
          <UserChild2 />
        </UserProvider>
    </div>
  );
}

export default App;
