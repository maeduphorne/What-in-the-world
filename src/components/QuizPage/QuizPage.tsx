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
  name: string
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
    <div className="display-area quiz-display" >
      <section className="display-area" >
        {currentCountry && (
        <div className="quiz-contents">
          <img src={currentCountry.flag} alt={`${currentCountry.name} flag`} className="flag-img" />
          <h2>{questions} {currentCountry.name}?</h2>
          <Form questions={`${questions} ${currentCountry.name}?`} currentCountry={currentCountry}/>
        </div>
        )}
      </section>
    </div>
  )
}

export default QuizPage;

