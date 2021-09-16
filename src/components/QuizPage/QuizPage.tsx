import React, {useEffect, useState} from 'react';
import Form from '../Form/Form'

interface IState{
  currentCountry: {
    name: string
    population: number
    capital: string
    flag: string
    subregion: string
    
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
        {currentCountry && <h2>{questions} {currentCountry.name}?</h2>}
        {currentCountry && <Form questions={`${questions} ${currentCountry.name}?`} currentCountry={currentCountry}/>}
      </section>
    </div>
  )
}

export default QuizPage;

// Testing!
// Error handling needed:
// On page refresh, it should not render a new question, but keep previous question
// 
