import React from 'react';
import './Map.css';
import App from '../App/App';

interface IProps{
  countries: {
    name: string
    population: number
  }[]
}

const Map: React.FC<IProps> = ( {countries} ) => {
  return (
    <div>
        Hello I'm in Map!
    </div>
  )
}

export default Map;
//This will contain our drop-down menu which will need to be populated with the country names
//We will take the prop and map over to display all names to render the drop-down
//Testing needed
