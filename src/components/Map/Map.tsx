import React, { useState } from 'react';
import './Map.css';
// import App from '../App/App';
import QuizPage from '../QuizPage/QuizPage'
const { v4: uuidv4 } = require('uuid')

interface IProps{
  countries: {
    name: string
    population: number
  }[]
}

const Map: React.FC<IProps> = ( {countries} ) => {

  const [selectedCountry, setSelectedCountry]= useState<string>('')

  const countryNames = countries.map(country => {
   return <option key={uuidv4()} value={country.name}>{country.name}</option>
  })


  const getSelectedCountry = () => {
    const getCurrentCounty = countries.filter(country => country.name.includes('Afghanistan'))
    return getCurrentCounty
  }
  return (
    <section>
    <form className="country-selector">
      <select defaultValue={'default'} className="country-dropdown">
        <option value='default' disabled>Choose a country</option>
        {countryNames}
        </select>
      <button className="dropdown-btn">Submit Country</button>
    </form>
    <QuizPage questions={
      [
       'What is the population of',
       'What is the capital of',
       'How many countries border'
      ]
   } 
    currentCountry={getSelectedCountry()}/>
    </section>
  )
}

export default Map;
//This will contain our drop-down menu which will need to be populated with the country names
//We will take the prop and map over to display all names to render the drop-down
//Testing needed