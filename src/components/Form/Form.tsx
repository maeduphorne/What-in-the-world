import React, {useState} from 'react';
import Answer from '../Answers/Answers'
import './Form.css';

interface IState{
  questions:Array<string> | string
  currentCountry: {
    name: string
  } | undefined
}

const Form:React.FC <IState> = ({ questions, currentCountry}) => {
  const [answer,setAnswer] = useState<string | number>('')

  const handleSubmit = (e:any) => {
   e.preventDefault()
   return (
     <>
     <Answer answer={answer}/>
     </>
   )
  }
  return (
    <form>
      <input className='answer-input' name='answer' value={answer} onChange={(e:any) => setAnswer(e.target.value) }/>
      <button className='submit-button' onClick={handleSubmit}>Submit Answer</button>
    </form>
  )
}

export default Form;
//Holds a label of the question, an input field set to number | string, and a submit button
// will need a handleChange function and handleClick function
// This will then route to Answers Component on click
// testing needed