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
    // alert('minusStep');
    if (step > 1) setStep((step) => step - 1);
  }

  // step handler: plus
  function handlePlusStep() {
    // alert('plusStep');
    setStep((step) => step + 1);
  }

  // count handler: minus
  function handleMinusCount() {
    // alert('minusCount');
    setCount((count) => count - step);
  }

  // count handler: plus
  function handlerPlusCounter() {
    // alert('plusCounter');
    setCount((count) => count + step);
  }

  return (
    <div>
      <div>
        <button onClick={handleMinusStep}>&#45;</button>
        Step: {step}
        <button onClick={handlePlusStep}>&#43;</button>
      </div>
      <div>
        <button onClick={handleMinusCount}>&#45;</button>
        Count: {count}
        <button onClick={handlerPlusCounter}>&#43;</button>
      </div>
      <p>{count} days from today is Sat Sep 20 2025</p>
    </div>
  );
}
