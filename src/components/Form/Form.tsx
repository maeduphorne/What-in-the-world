import React, {useState} from 'react';
import './Form.css';

const Form = () => {
 const [question, setQuestion] = useState('')
  return (
    <div>
      Hello World
    </div>
  )
}

export default Form;
//Holds a label of the question, an input field set to number | string, and a submit button
// will need a handleChange function and handleClick function
// This will then route to Answers Component on click
// testing needed