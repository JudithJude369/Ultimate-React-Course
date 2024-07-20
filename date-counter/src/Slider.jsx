import { useState } from 'react';

const Slider = () => {
  const [slide, setSlide] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date('July 21 2027');
  date.setDate(date.getDate() + count);

  function handleReset() {
    setSlide(1);
    setCount(0);
  }
  return (
    <div>
      <section>
        <input
          type="range"
          min={0}
          max={10}
          value={slide}
          onChange={(e) => setSlide(Number(e.target.value))}
        />
        <span>{slide}</span>
      </section>
      <section>
        <button onClick={() => setCount((count) => count - slide)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((count) => count + slide)}>+</button>
      </section>
      <p>
        {count} days from today is {date.toDateString()}
      </p>
      {slide !== 1 || count !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
};

export default Slider;
