import React, { useEffect } from 'react';
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

  const checkPopulation = () => {
    if (guess < currentCountry.population + 100000 || guess > currentCountry.population - 100000) {
      return `Correct! The population of ${currentCountry.name} is ${currentCountry.population}!`
    } else {
      return `Incorrect- the population of ${currentCountry.name} is ${currentCountry.population}.`
    }
  }

  const checkCapital = () => {
    if (guess === currentCountry.capital) {
      return `Correct! The capital of ${currentCountry.name} is ${currentCountry.capital}! `
    } else {
      return `Incorrect- the capital of ${currentCountry.name} is ${currentCountry.capital}.`
    }
  }

  const checkBorders = () => {
    if (guess === currentCountry.borders.length) {
      return `Correct! ${currentCountry.name} shares a border with ${currentCountry.borders.length} countries!`;
    } else {
      return `Incorrect- ${currentCountry.name} shares a border with ${currentCountry.borders.length} countries.`;
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
    <div>
      Hello World
    </div>
  )
}

export default Answers;