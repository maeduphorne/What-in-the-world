import React, { useState, useEffect } from 'react';
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
  const [answer,setAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e:any) => {
    e.preventDefault()
    if (!answer) {
      return
    }
    setIsSubmitted(true)
  }

  return (
    <div className="display-area">
      { (isSubmitted && answer) && <Answer guess={answer} currentCountry={currentCountry} questions={questions}/> }
      { !isSubmitted && (
      <form>
        <input type="text" className='answer-input' name='answer' value={answer} onChange={(e:any) => setAnswer(e.target.value.match(/[A-Za-z0-9]+/g)) } required pattern="[A-Za-z0-9]+" />
        <button className='submit-button' onClick={handleSubmit}>Submit Answer</button>
      </form>
      )}
        { answer === null && <p className="input-error-message">Please only enter valid characters in your guess!</p> } 
    </div>
  )
}

export default Form;
