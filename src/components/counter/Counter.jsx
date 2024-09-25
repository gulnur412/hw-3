import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  // }
  return (
    <div>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)} >+</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>
    </div>
  );
};

export default Counter;
