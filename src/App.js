import React, {useState, useRef} from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import './App.css';

function App() 
{
const [state, setState] = useState({
  input: "",
  previousNumber: "",
  currentNumber: "",
  operator: ""
});

const addToInput = val => {
setState({input: state.input + val});
}
const calculatorKeysOrdered = 
['7' ,'8', '9', '/', '4', '5', '6', '*', 
'1', '2', '3', '+', '.', '0', '=', '-'];

const clearInput = () =>{
  setState({ input: '' });
  
  // if (state.input === "")
  // {
  //   setState({previousNumber: ""});
  //   setState({currentNumber: ""});
  //   setState({operator: ""});
  // }
  // else
  // {
  //   setState({input: ""});
  //   setState({currentNumber: ""});
  // }
}

const isOperator = val => {
  return !(!isNaN(val) || val === "=");
}

const addOperatorToInput = val => {
  if (val === "." && state.input.indexOf(".") === -1)
  {setState({input: state.input + val})}
}

const calcKeysRef = useRef();

const createButtonsForRow = () => {
  var components = [];
    for(var j = 0; j < 4; j++)
    {
      var componentChildren = calculatorKeysOrdered.shift();
      //var componentProps = "handleClick={addToInput}"
      // var buttonComponent = React.createElement('Button',
      // componentProps,
      // componentChildren);
      //var buttonComponent = <Button handleClick={addToInput}>{componentChildren}</Button>
      if (!isOperator(componentChildren))
      {
        var buttonComponent = <Button handleClick={addToInput}>{componentChildren}</Button>
      }
      else{
        var buttonComponent = <Button handleClick={addOperatorToInput}>{componentChildren}</Button>
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
          <Input>{state.input}</Input>
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
