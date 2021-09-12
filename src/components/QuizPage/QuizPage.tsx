import { get } from 'https';
import React, {useState} from 'react';
// import './Quiz.css';
import { Link } from 'react-router-dom';

interface IState {
  questions:Array<String> | String
  currentCountry: Object
}

const QuizPage = ({questions, currentCountry}:IState) => {
  const [quizQuestions, setQuestion] = useState('')
  const [country, setCountry] = useState({})

  const getRandomElement = (questions:any[]) => {
    const result = questions[Math.floor(Math.random() * questions.length)]
    setQuestion(result)
  }


 
  return (
    <div>
     <h1>{quizQuestions}</h1>
    </div>
  )
}

export default QuizPage;

//This will be our overarching page that renders the initial quiz(form), the answers (which will also have the CountryInfo)
// function that randomizes the quiz question and passes the correct info to the form component to be compared with the form input values
// props of questions to Form component
// This can hold state of the selected country and state of an array of 4 questions(strings)
// This will render form that holds a randomized question 
// write helper function that compares input values to country object, set state for 'quizResults' and pass 'quizResults' as prop to Answers Component
// Testing needed