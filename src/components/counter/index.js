import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = (num) => {
    setCount((prev) => prev + num); //Increase value of the previous value, as we cant guarantee count is going to be the previous value
  };

  const decrement = (num) => {
    setCount((prev) => prev - num);
  };

  const reset = () => {
    setCount(0);
  };

  const style = (e) => {
    e.target.style.color = "red";
  };

  const unstyle = (e) => {
    e.target.style.color = "black";
  };

  return (
    <div className="counter">
      <h3>Title</h3>
      <p role="figure" className={count < 0 ? "debt" : ""}>
        The counter: {count}
      </p>
      <button onClick={() => decrement(10)}>--</button>
      <button onClick={() => decrement(1)}>-</button>
      <button onClick={() => increment(1)}>+</button>
      <button onClick={() => increment(10)}>++</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default Counter;
