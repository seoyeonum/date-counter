import { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const nameOfDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const nameOfMonth = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

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

  // const date1 = new Date(); // new Date() 는 Object
  // console.log(date1);
  // console.log(typeof date1);
  // const date2 = Date(); // Date() 는 string
  // console.log(date2);
  // console.log(typeof date2);

  // get today's data
  const today = new Date();

  const day = today.getDay(); // .getDay() 는 0(일) ~ 6(토)로 출력된다.
  const date = today.getDate();
  const month = today.getMonth(); // .getMonth() 는 0 ~ 11 로 출력된다.
  const year = today.getFullYear();

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
      <p>
        {count} days from today is {nameOfDay[day]} {nameOfMonth[month]} {date}{' '}
        {year}
      </p>
    </>
  );
}

function Button({ btnName, functionName }) {
  return <button onClick={functionName}>{btnName}</button>;
}
