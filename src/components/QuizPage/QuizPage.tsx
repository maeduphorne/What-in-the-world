import React, {useEffect, useState} from 'react';
import { setSyntheticTrailingComments } from 'typescript';
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
  const [questions, setQuestions] = useState< string | null > (null)
  const questionList = [
    'What is the population of',
    'What is the capital of',
    'How many countries border'
  ]
   // ********* Randomizer ********//
  const getRandomElement = () => {
    const result = questionList[Math.floor(Math.random() * questionList.length)]
    setQuestions((result))
    
  }

  useEffect(() =>{
    if(!questions)
      getRandomElement()
  }, [])
  
  const getCountryName = () => {
    if(currentCountry.name) {
      return currentCountry.name
    }else {
      let UrlName = window.location.href
      let splitUrl = UrlName.split('/')
      let countryName = splitUrl[3]
      return countryName
    }
  }
  return (
    <div className="display-area" >
      <section className="display-area" >
        {currentCountry && <h2>{questions} {getCountryName()}?</h2>}
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
