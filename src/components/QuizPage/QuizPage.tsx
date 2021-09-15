import React, {useEffect, useState} from 'react';
import Form from '../Form/Form'

interface IState{
  currentCountry: {
    name: string
    population: number
    capital: string
    borders: string[]
  } 
  country: string
}


const QuizPage: React.FC<IState> = ({ currentCountry }) => {
  const [questions, setQuestions] = useState< string[] | string > ([
    'What is the population of',
    'What is the capital of',
    'How many countries border'
  ])
   // ********* Randomizer ********//
  const getRandomElement = () => {
    const result = questions[Math.floor(Math.random() * questions.length)]
    setQuestions((result))
  }

  useEffect(() =>{
      getRandomElement()
  }, [])
  
  return (
    <div>
      <section>
        {currentCountry && <h2>`${questions} ${currentCountry.name}?`</h2>}
        {currentCountry && <Form questions={`${questions} ${currentCountry.name}?`} currentCountry={currentCountry}/>}
      </section>
    </div>
  )
}

export default QuizPage;

// //This will be our overarching page that renders the initial quiz(form), the answers (which will also have the CountryInfo)
// // [X] function that randomizes the quiz question and passes the correct info to the form component to be compared with the form input values
// // [x] props of questions to Form component
// // [X] This can hold state of the selected country and state of an array of 4 questions(strings)
// // [x] This will render form that holds a randomized question 
// // write helper function that compares input values to country object, set state for 'quizResults' and pass 'quizResults' as prop to Answers Component
// // Testing needed

// // [X] Need to add Link Router to take user to a QuizPage component but not render on main page
