import React, { useEffect } from 'react';
import './Answers.css';

interface Iprops{
  question: string
  guess: string | number
  country: {
    name: string
    population: number
    capital: string
    borders: string[]
  }
}

const Answers: React.FC<Iprops> = ({ country, question, guess }) => {

  const checkPopulation = () => {
    if (guess < country.population + 100000 || guess > country.population - 100000) {
      return `Correct! The population of ${country.name} is ${country.population}!`
    } else {
      return `Incorrect- the population of ${country.name} is ${country.population}.`
    }
  }

  const checkCapital = () => {
    if (guess === country.capital) {
      return `Correct! The capital of ${country.name} is ${country.capital}! `
    } else {
      return `Incorrect- the capital of ${country.name} is ${country.capital}.`
    }
  }

  const checkBorders = () => {
    if (guess === country.borders.length) {
      return `Correct! ${country.name} shares a border with ${country.borders.length} countries!`;
    } else {
      return `Incorrect- ${country.name} shares a border with ${country.borders.length} countries.`;
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
    findAnswer(question)
  }, [])

  return (
    <div>
      Hello World
    </div>
  )
}

export default Answers;