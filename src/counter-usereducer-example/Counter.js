import { useReducer } from 'react';

const initialState = {
  count: 0,
};

const counterReducer = (counterState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: counterState.count + 1 };
    case 'DECREMENT':
      return { count: counterState.count - 1 };
    default:
      return counterState;
  }
};

const Counter = () => {
  const [counterState, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <>
      <button onClick={increment}>+</button>
      <span>{counterState.count}</span>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
