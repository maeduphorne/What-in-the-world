import React from 'react';
import './Map.css';
import App from '../App/App';
import QuizPage from '../QuizPage/QuizPage'
import { countReset } from 'console';

interface IProps{
  countries: {
    name: string
    population: number
  }[]
}

const Map: React.FC<IProps> = ( {countries} ) => {
  const countryNames = countries.map(country => {
   return <option value={country.name}>{country.name}</option>
  })

  return (
    <form className="country-selector">
      <select className="country-dropdown">{countryNames}</select>
      <button className="dropdown-btn">Submit Country</button>
    </form>
  )
}

export default Map;
//This will contain our drop-down menu which will need to be populated with the country names
//We will take the prop and map over to display all names to render the drop-down
//Testing needed