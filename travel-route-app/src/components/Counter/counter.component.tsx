import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Passengers</h2>
      <button onClick={handleDecrement} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};
