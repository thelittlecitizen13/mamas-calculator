import React from 'react';
import Input from './components/Input';
import { useSelector } from 'react-redux';
import './App.css';
import Keyboard from './components/Keyboard';

function App() 
{
  const input = useSelector(state => state.input);
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Input>{input}</Input>
        </div>
        <Keyboard></Keyboard>

      </div>
    </div>
  );
}

export default App;
