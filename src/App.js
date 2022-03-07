import './App.scss';
import React, {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div class="counter">
      <button onClick={decrement}>Odečíst</button>
      <p>{counter}</p>
      <button onClick={increment}>Přičíst</button>
    </div>
  );
}

export default App;
