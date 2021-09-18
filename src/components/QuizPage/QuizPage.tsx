import React, {useEffect, useState} from 'react';
import { setSyntheticTrailingComments } from 'typescript';
import Form from '../Form/Form'

interface IState{
  currentCountry: {
    name: string
    languages:[{
      name:string
    }]
    population: number
    capital: string
    flag: string
    subregion: string
    currencies:[{
      name:string
    }]
    borders: string[]
  } 
  country: string
  name: string
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

