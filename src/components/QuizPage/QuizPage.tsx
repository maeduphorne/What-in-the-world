import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


interface IState{
  questions:Array<string> | string
  currentCountry: {
    name: string
  } | undefined
}

const QuizPage: React.FC<IState> = ({questions, currentCountry}) => {
  
  const [quizQuestions, setQuiz] = useState<IState['questions']>()
  const [country, setCountry] = useState<IState['currentCountry']>()


  const getRandomElement = () => {
    const result = questions[Math.floor(Math.random() * questions.length)]
    setQuiz((result))
  }

  useEffect(() =>{
   if(!quizQuestions) {
     getRandomElement()
   }
  }, [quizQuestions])
  
  return (
    <div>
     <section>
       {currentCountry && <h2>{quizQuestions} {currentCountry.name}</h2> }
     
     </section>
    </div>
  )
}

export default QuizPage;

//This will be our overarching page that renders the initial quiz(form), the answers (which will also have the CountryInfo)
// [X] function that randomizes the quiz question and passes the correct info to the form component to be compared with the form input values
// props of questions to Form component
// [X] This can hold state of the selected country and state of an array of 4 questions(strings)
// This will render form that holds a randomized question 
// write helper function that compares input values to country object, set state for 'quizResults' and pass 'quizResults' as prop to Answers Component
// Testing needed