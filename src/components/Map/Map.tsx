import React, { useEffect, useState } from 'react';
import './Map.css';
import QuizPage from '../QuizPage/QuizPage'
const { v4: uuidv4 } = require('uuid')
// this npm package helps us to set unique keys for components

interface IProps{
  countries: {
    name: string
    population: number
  }[]
}

const Map: React.FC<IProps> = ( {countries} ) => {
  const [selectedCountry, setSelectedCountry]= useState<any>('Select A Country')
  // const value = selectedCountry && selectedCountry.value;


  const countryNames = countries.map(country => { 
    return <option key={uuidv4()}>{country.name}</option>
  })


 //// this methos is checking if given country name exist in array of all countries.//////

 const getCurrentCountry = () => {
   const country = countries.find(currCountry => currCountry.name.includes(selectedCountry))

   
   return country;
 }

  return (
    <section>
    <form className="country-selector">
      <select 
      className="country-dropdown"
      onChange={(e) => setSelectedCountry(e.target.value)}>
      <option value="">{selectedCountry}</option>
      options={countryNames}
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
    currentCountry={getCurrentCountry()}/>
    </section>
  )
}

export default Map;
//This will contain our drop-down menu which will need to be populated with the country names
//We will take the prop and map over to display all names to render the drop-down
//Testing needed