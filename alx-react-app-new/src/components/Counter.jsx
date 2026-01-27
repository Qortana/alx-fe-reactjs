import { useContext } from 'react';
import CounterContext from './CounterContext';

function Counter() {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
