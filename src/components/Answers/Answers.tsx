import { useEffect, useState } from 'react';
import './Answers.css';

interface Iprops{
  questions: string
  guess: string | number
  currentCountry: {
    name: string
    population: number
    capital: string
    borders: string[]
  } 
}

const Answers: React.FC<Iprops> = ({ currentCountry, questions, guess }) => {

  const [answer, setAnswer] = useState<string>('')

  const checkPopulation = () => {
    if (guess < currentCountry.population + 50000 || guess > currentCountry.population - 50000) {
      setAnswer(`Correct! The population of ${currentCountry.name} is ${currentCountry.population}!`);
    } else {
      setAnswer(`Incorrect- the population of ${currentCountry.name} is ${currentCountry.population}.`);
    }
  }

  const checkCapital = () => {
    if (guess === currentCountry.capital) {
      setAnswer(`Correct! The capital of ${currentCountry.name} is ${currentCountry.capital}! `);
    } else {
      setAnswer(`Incorrect- the capital of ${currentCountry.name} is ${currentCountry.capital}.`);
    }
  }

  const checkBorders = () => {
    if (guess === currentCountry.borders.length) {
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

  useEffect(() => {
    findAnswer(questions)
  }, [])

  return (
    <article className="answer-display">
      <p>
        Your guess was {guess}
      </p>
      <p>
        {answer}
      </p>
    </article>
  )
}

export default Answers;