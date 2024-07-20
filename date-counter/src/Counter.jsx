import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("July 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <section>
        <button onClick={() => setStep((step) => step - 1)}>-</button>
        <span>Step:{step}</span>
        <button onClick={() => setStep((step) => step + 1)}>+</button>
      </section>
      <section>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <span>Count:{count}</span>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </section>
      <p>
        {count} days from today is {date.toDateString()}
      </p>
    </div>
  );
};

export default Counter;
