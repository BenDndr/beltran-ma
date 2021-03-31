import React, {useState} from 'react';
import Tweet from './tweet';
import "./App.css";

function App() {

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  }

  const [users, setUsers] = useState([
    { name: "Billy", message: "I'm here", power: 12 },
    { name: "Joe", message: "I'm the boss", power: 51 },
    { name: "Batman", message: "I'm Batman", power: 75 }
  ]);

  return(
    <div className="app">
      <h1 className={isRed ? "red" : ""}>Change my color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} power={user.power}/>
      ))}
    </div>
  );
}

export default App;
