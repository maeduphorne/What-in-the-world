import React from 'react';
import './Map.css';
import App from '../App/App';
import QuizPage from '../QuizPage/QuizPage'

interface IProps{
  countries: {
    name: string
    population: number
  }[]
}

const Map: React.FC<IProps> = ( {countries} ) => {
  console.log(countries)
  return (
    <div>
       <QuizPage questions={["What population of", "What is the capital of", "What many countries border"]} currentCountry={Object}/>
    </div>
  )
}

export default Map;
//This will contain our drop-down menu which will need to be populated with the country names
//We will take the prop and map over to display all names to render the drop-down
//Testing needed
