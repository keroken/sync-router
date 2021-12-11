import React, { useState } from 'react';

const History = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>This is History</h2>
      <div>
        <button disabled={count === 3} onClick={() => setCount(prev => prev + 1)}>Click Me</button>
      </div>
      <span>{count}</span>
    </div>
  );
};

export default History;
