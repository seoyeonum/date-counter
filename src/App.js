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

  // step handler: minus
  function handleMinusStep() {
    if (step > 1) setStep((step) => step - 1);
  }

  // step handler: plus
  function handlePlusStep() {
    setStep((step) => step + 1);
  }

  // count handler: minus
  function handleMinusCount() {
    setCount((count) => count - step);
  }

  // count handler: plus
  function handlePlusCount() {
    setCount((count) => count + step);
  }

  return (
    <>
      <div>
        <Button btnName="-" functionName={handleMinusStep} />
        Step: {step}
        <Button btnName="+" functionName={handlePlusStep} />
      </div>
      <div>
        <Button btnName="-" functionName={handleMinusCount} />
        Count: {count}
        <Button btnName="+" functionName={handlePlusCount} />
      </div>
      <p>{count} days from today is Sat Sep 20 2025</p>
    </>
  );
}

function Button({ btnName, functionName }) {
  return <button onClick={functionName}>{btnName}</button>;
}
