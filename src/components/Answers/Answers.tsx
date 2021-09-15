import React from 'react';
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

  const checkPopulation = (userGuess: number) => {
    if (userGuess < country.population + 100000 || userGuess > country.population -100000) {
      return `Correct! The population of ${country.name} is ${country.population}!`
    } else {
      return `Incorrect- the population of ${country.name} is ${country.population}.`
    }
  }

  const checkCapital = (userGuess: string) => {
    if (userGuess === country.capital) {
      return `Correct! The capital of ${country.name} is ${country.capital}! `
    } else {
      return `Incorrect- the capital of ${country.name} is ${country.capital}.`
    }
  }

  const checkBorders = (userGuess: number) => {

  }

  const findAnswer = (question, guess) => {
    if (question === `What is the population of ${country.name}?`) {
      checkPopulation(guess);
    } else if (question === `What is the capital of ${country.name}?`) {
      checkCapital(guess);
    } else if ( question === `How many countries border ${country.name}?`) {
      checkBorders(guess);
    }
  }

  return (
    <div>
      Hello World
    </div>
  )
}

export default Answers;