import React, {useState} from 'react';
import './Form.css';

interface IState{
  questions:Array<string> | string
  currentCountry: {
    name: string
  } | undefined
}

const Form:React.FC <IState> = ({ questions, currentCountry}) => {
  return (
    <form>
      <input className='answer-input' name='answer' value=''/>
      <button className='submit-button'> Submit Answer</button>
    </form>
  )
}

export default Form;
//Holds a label of the question, an input field set to number | string, and a submit button
// will need a handleChange function and handleClick function
// This will then route to Answers Component on click
// testing needed