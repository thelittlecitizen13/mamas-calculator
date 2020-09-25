import React, {useState, useRef} from 'react';
import Button from './components/Buttons/Button';
import Input from './components/Input';
import ClearButton from './components/Buttons/ClearButton';
import { useSelector, useDispatch } from 'react-redux';
import {addInput, setInput} from './actions';
import './App.css';

function App() 
{
  const input = useSelector(state => state.input);
  const dispatch = useDispatch();

const addToInput = val => {
  if(input === 'Expression not valid')
  {
    clearInput();
  }
  dispatch(addInput(val));
}
const calculatorKeysOrdered = 
['7' ,'8', '9', '/', '4', '5', '6', '*', 
'1', '2', '3', '+', '.', '0', '=', '-'];

const clearInput = () =>{
  dispatch(setInput(''));
}

const isOperator = val => {
  return !(!isNaN(val) || val === "=");
}

const canAddOperator = () =>{
  if (
    input.indexOf("*") === input.length - 1 ||
    input.indexOf("/") === input.length - 1 ||
    input.indexOf("-") === input.length - 1 ||
    input.indexOf("+") === input.length - 1
  )
  {
    return false;
  }
  else
  {
    return true;
  }
  
}

const addOperatorToInput = val => {
  if (val === "." && input.indexOf(".") === -1)
  {
    addToInput(val);
  }
  else if(canAddOperator()){
    addToInput(val);
  }
}

const calculate = () => {
  try{
    dispatch(setInput(eval(input)));
  }
  catch
  {
    dispatch(setInput('Expression not valid'));
  }
  
}

const calcKeysRef = useRef();

const createButtonsForRow = () => {
  var components = [];
    for(var j = 0; j < 4; j++)
    {
      var componentChildren = calculatorKeysOrdered.shift();
      if (!isOperator(componentChildren))
      {
        var buttonComponent = <Button handleClick={addToInput}>{componentChildren}</Button>
      }
      else{
        
        var buttonComponent = <Button handleClick={addOperatorToInput}>{componentChildren}</Button>
      }
      if (componentChildren === "=")
      {
        var buttonComponent = <Button handleClick={calculate}>{componentChildren}</Button>
      }
    

      
      components.push(buttonComponent);
    
    }
    return components;
  }

const createButtonDiv = () => {
    
    var rows = [];
    var numberOfRows = calculatorKeysOrdered.length
    for(var i = 0; i < numberOfRows  / 4; i++)
    {
      var children = createButtonsForRow();
      var rowDiv = React.createElement('div', {className: "row"}, children);
      rows.push(rowDiv);
      
    }
    var calcDiv = React.createElement('div', {}, rows);
    return calcDiv;
  }
  


  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Input>{input}</Input>
        </div>
        <div id="calcKeys" ref={calcKeysRef}>
          {createButtonDiv()}
          
        </div>
      
        <div className="row">
          <ClearButton handleClick={clearInput}>Clear</ClearButton>
        </div>

      </div>
    </div>
  );
}

export default App;
