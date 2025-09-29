import { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // get today's data
  const today = new Date();
  today.setDate(today.getDate() + count);

  // step handler
  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  // count handler: minus
  function handleMinusCount() {
    setCount((c) => c - step);
  }

  // count handler: plus
  function handlePlusCount() {
    setCount((c) => c + step);
  }

  // handleReset
  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <div>
        {/* date-counter 의 template 변경하기 */}
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={handleStep}
        />
        <span>{step}</span>
      </div>
      <div>
        <Button btnName="-" functionName={handleMinusCount} />
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <span>Count: {count}</span> */}
        <Button btnName="+" functionName={handlePlusCount} />
      </div>
      <p>
        <span>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
          {today.toDateString()}
        </span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : null}
    </>
  );
}

function Button({ btnName, functionName }) {
  return <button onClick={functionName}>{btnName}</button>;
}
