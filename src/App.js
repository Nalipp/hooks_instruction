import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}

export default App;
