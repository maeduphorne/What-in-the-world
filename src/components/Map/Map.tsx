import React from 'react';
import './Map.css';
import QuizPage from '../QuizPage/QuizPage'

const Map = () => {
  return (
    <div>
      <QuizPage questions={["What population of", "What is the capital of", "What many countries border"]} currentCountry={Object} />
      
    </div>
  )
}

export default Map;
//This will contain our drop-down menu which will need to be populated with the country names
//We will take the prop and map over to display all names to render the drop-down
//Testing needed
