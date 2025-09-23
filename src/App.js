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

  // step handler: minus
  function handleMinusStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  // step handler: plus
  function handlePlusStep() {
    setStep((s) => s + 1);
  }

  // count handler: minus
  function handleMinusCount() {
    setCount((c) => c - step);
  }

  // count handler: plus
  function handlePlusCount() {
    setCount((c) => c + step);
  }

  return (
    <>
      <div>
        <Button btnName="-" functionName={handleMinusStep} />
        <span>Step: {step}</span>
        <Button btnName="+" functionName={handlePlusStep} />
      </div>
      <div>
        <Button btnName="-" functionName={handleMinusCount} />
        <span>Count: {count}</span>
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
    </>
  );
}

function Button({ btnName, functionName }) {
  return <button onClick={functionName}>{btnName}</button>;
}
