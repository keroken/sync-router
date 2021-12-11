import React, { useRef, useState } from 'react';

const History = () => {
  const [buttonStatus, setButtonStatus] = useState('active');
  let countRef = useRef(0);
  return (
    <div>
      <h2>This is History</h2>
      <div>
        <button disabled={buttonStatus === 'disabled'} onClick={() => {
            countRef.current++;
            console.log(countRef.current);
            if (countRef.current === 3) {
              setButtonStatus('disabled');
            }
          }}>Click Me</button>
      </div>
      <span>{countRef.current}</span>
    </div>
  );
};

export default History;
