import React, {useEffect, useState} from 'react';
import apiCalls from '../../api/apiCalls';
import Form from '../Form/Form'

interface IQuizPageProps {
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
}


const QuizPage: React.FC<IQuizPageProps> = ({ currentCountry }) => {
  const [questions, setQuestions] = useState< string | null > (null)
  const [country, setCountry] = useState<any>()
  const questionList = [
    'What is the population of',
    'What is the capital of',
    'How many countries border'
  ]
  
   // ********* Randomizer ********//

  useEffect(() => {
    if (currentCountry && currentCountry.name) {
      setCountry(currentCountry)
      getRandomElement(currentCountry.name)
    } else {
      setCountry(JSON.parse(localStorage.getItem('currentCountry')!))
      getRandomElement(JSON.parse(localStorage.getItem('currentCountry')!).name)
    }
  }, [])

  const getRandomElement = (name: string) => {
  const result = questionList[Math.floor(Math.random() * questionList.length)] + ' ' + name
   setQuestions((result))
  }
  
  
  return (
    <div className="display-area" >
      <section className="display-area" >
        {country  && <h2>{questions}?</h2>}
        {country  && <Form questions={`${questions} ${country.name}?`} currentCountry={country}/>}
      </section>
    </div>
  )
}

export default QuizPage;

// Testing!
// Error handling needed:
// On page refresh, it should not render a new question, but keep previous question
// 
