import { useEffect, useState } from 'react';
import './Answers.css';

interface Iprops{
  questions: string
  guess: string 
  currentCountry: {
    name: string
    languages:[{
      name:string
    }]
    population: number
    capital: string
    subregion: string
    borders: string[]
    currencies:[{
      name:string
    }]
    flag: string
  } 
}

const Answers: React.FC<Iprops> = ({ currentCountry, questions, guess }) => {

  const [answer, setAnswer] = useState<string | number>('')
  const [currency] = currentCountry.currencies
  const [languages, setLanguage] = useState<any>('')

  const checkPopulation = () => {
    if (Number(guess) < (currentCountry.population + 50000) && Number(guess) > (currentCountry.population - 50000)) {
      setAnswer(`Correct! The population of ${currentCountry.name} is ${currentCountry.population}!`);
    } else {
      setAnswer(`Incorrect- the population of ${currentCountry.name} is ${currentCountry.population}.`);
    }
  }

  const checkCapital = () => {
    if (guess.toUpperCase() === currentCountry.capital.toUpperCase()) {
      setAnswer(`Correct! The capital of ${currentCountry.name} is ${currentCountry.capital}! `);
    } else {
      setAnswer(`Incorrect- the capital of ${currentCountry.name} is ${currentCountry.capital}.`);
    }
  }

  const checkBorders = () => {
    if (Number(guess) === currentCountry.borders.length) {
      setAnswer(`Correct! ${currentCountry.name} shares a border with ${currentCountry.borders.length} countries!`);
    } else {
      setAnswer(`Incorrect- ${currentCountry.name} shares a border with ${currentCountry.borders.length} countries.`);
    }
  }

  const findAnswer = (quizQuestion: string) => {
    if (quizQuestion.includes(`population`)) {
      checkPopulation();
    } else if (quizQuestion.includes(`capital`)) {
      checkCapital();
    } else if (quizQuestion.includes(`border`)) {
      checkBorders();
    }
  }
  const setLanguages = () => {
   const checkLanguage = currentCountry.languages.map(country => `${country.name} `)
   setLanguage(checkLanguage)
  }

  useEffect(() => {
    findAnswer(questions)
    setLanguages()
  }, [])

  return (
    <article 
      className="answer-display"
      style={
        { backgroundImage: `url(${currentCountry.flag})` }
      }>
      <div className="gradient-container">
        <p className="user-guess">
          Your guess was {guess}
        </p>
        <h3>
          {answer}
        </h3>
        <section className="extra-facts">
          <p>
            {currentCountry.name} is located in {currentCountry.subregion}.
            Country has currency of {currency.name} and population speaks {languages}

          </p>
        </section>
      </div>
    </article>
  )
}

export default Answers;

