import React from 'react'
import ClearButton from './Buttons/ClearButton';
import { useSelector, useDispatch } from 'react-redux';
import {addInput, setInput} from '../actions';
import Button from './Buttons/Button'

export default function Keyboard() {

    const input = useSelector(state => state.input);
    const dispatch = useDispatch();
    const addToInput = val => {
        if(input === 'Expression not valid')
        {
          clearInput();
        }
        dispatch(addInput(val));
      }
      var calculatorKeysOrdered = 
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
        else if(val !== "." & canAddOperator()){
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
      
      
      const createButtonsForRow = () => {
        var components = [];
          for(var j = 0; j < 4; j++)
          {
            var componentChildren = calculatorKeysOrdered.shift();
            var buttonComponent;
            if (!isOperator(componentChildren))
            {
              buttonComponent = <Button handleClick={addToInput}>{componentChildren}</Button>
            }
            else{
              
              buttonComponent = <Button handleClick={addOperatorToInput}>{componentChildren}</Button>
            }
            if (componentChildren === "=")
            {
              buttonComponent = <Button handleClick={calculate}>{componentChildren}</Button>
            }
          
      
            
            components.push(buttonComponent);
          
          }
          return components;
        }
      
      const createButtonDiv = () => {
          
          var rows = [];
          var numberOfRows = calculatorKeysOrdered.length / 4
          for(var i = 0; i < numberOfRows; i++)
          {
            var children = createButtonsForRow();
            var rowDiv = React.createElement('div', {className: "row"}, children);
            rows.push(rowDiv);
            
          }
          var calcDiv = React.createElement('div', {}, rows);
          return calcDiv;
        }
        
    return (
        <>
        <div id="calcKeys">
          {createButtonDiv()}
          
        </div>
      
        <div className="row">
          <ClearButton handleClick={clearInput}>Clear</ClearButton>
        </div>
        </>
    )
}
