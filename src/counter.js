import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="Counter">
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}

export default Counter;
