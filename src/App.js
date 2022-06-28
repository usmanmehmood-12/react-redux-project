import './App.css';
import { increment, decrement, increaseByAmount } from './redux/slices/counterSlices';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)

  //  const increaseCounter = useCallback(() => dispatch({ type: 'increment/counter' }), [])
  console.log(counter)
  return (
    <div className="App">
      <h1>Redux toolkit Counter App</h1>
      <h2>counter: {counter.value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increaseByAmount(100))}>Increase By Amount</button>

    </div>
  );
}

export default App;
