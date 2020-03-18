import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';

import { increment, incrementBy, decrement } from './actions';

function App() {
  // access the state variables
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  // allows me to use actions
  const dispatch = useDispatch();

  //TODO: add logged in component
  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={ () => dispatch(increment()) } >+</button>
      <button onClick={ () => dispatch(incrementBy(5)) } >+5</button>
      <button onClick={ () => dispatch(decrement()) } >-</button>

      {isLogged ? <h3>Shouldn't see this unless logged</h3> : ""}

    </div>
  );
}

export default App;
