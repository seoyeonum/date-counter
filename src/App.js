import './style.css';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const step = 1;
  const count = 0;

  return (
    <div>
      <div>
        <button>&#45;</button>
        Step: {step}
        <button>&#43;</button>
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
