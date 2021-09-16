import React, {useState} from 'react';
import Answer from '../Answers/Answers'
import './Form.css';

interface IState{
  questions: string
  currentCountry: {
    name: string
    population: number
    capital: string
    flag: string
    subregion: string
    borders: string[]
  } 
}

const Form:React.FC <IState> = ({ questions, currentCountry}) => {
  const [answer,setAnswer] = useState<string | number>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e:any) => {
    e.preventDefault()
    setIsSubmitted(true)
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
// testing needed
// error handling needed:
// Should not submit if input field is left empty
// If input is left empty and user clicks submit, they should still see the input field (try to implement required data type)