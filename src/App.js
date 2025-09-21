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
  const count = 0;

  // step Handler
  function handleMinusStep() {
    // alert('minusStep');
    if (step > 1) setStep((step) => step - 1);
  }

  function handlePlusStep() {
    // alert('plusStep');
    setStep((step) => step + 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleMinusStep}>&#45;</button>
        Step: {step}
        <button onClick={handlePlusStep}>&#43;</button>
      </div>
      <div>
        <button>&#45;</button>
        Count: {count}
        <button>&#43;</button>
      </div>
      <p>{count} days from today is Sat Sep 20 2025</p>
    </div>
  );
}
