import React, {useState} from 'react';
import Answer from '../Answers/Answers'
import './Form.css';

interface IState{
  questions: string
  currentCountry: {
    name: string
    population: number
    capital: string
    borders: string[]
  } 
}

const Form:React.FC <IState> = ({ questions, currentCountry}) => {
  const [answer,setAnswer] = useState<string | number>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log('i am clicking')
    setIsSubmitted(true)
  //  return (
  //    <Answer guess={answer}/>
  //  )
  }
  return (
    <div>
      { (isSubmitted && answer) && <Answer guess={answer} currentCountry={currentCountry} questions={questions}/> }
      { !isSubmitted && (
      <form>
        <input className='answer-input' name='answer' value={answer} onChange={(e:any) => setAnswer(e.target.value) } required />
        <button className='submit-button' onClick={handleSubmit}>Submit Answer</button>
      </form>
      )}
    </div>
  )
}

export default Form;
// [X]Holds a label of the question, an input field set to number | string, and a submit button
// [x]will need a handleChange function and handleClick function
// This will then route to Answers Component on click
// testing needed