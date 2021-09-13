
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

interface IState{
  questions:Array<string>
  currentCountry: Object
}

const QuizPage: React.FC<IState> = ({questions}) => {
  const [quizQuestions, setQuiz] = useState('')


  const getRandomElement = () => {
    const result = questions[Math.floor(Math.random() * questions.length)]
    setQuiz((result))
  }

  useEffect(() => {
   if(!quizQuestions) {
     getRandomElement()
   }
  })
  
    
  
 
  return (
    <div>
     <section>
     <h2>{quizQuestions}</h2>
     </section>
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