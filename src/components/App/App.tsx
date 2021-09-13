import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import mapIcon from '../../assets/WorldMap.jpg';
import Map from '../Map/Map';
import apiCalls from '../../api/apiCalls';

interface IState{
  countries: {
    name: string
    population: number
  }[]
}

function App() {
  const [countries, setCountries] = useState<IState['countries']>([])
  
  useEffect(() => {
    if (!countries.length) {
      apiCalls.fetchCountriesData()
      .then((data) => setCountries(data))
    }
  })
  

  // const countryNames = countries?.map(country => country.name)

  return (
    <div className="App">
      <header>
        <h1>What In The World</h1>
      </header>
      <Link to="/" >
        <main className="mainDisplay">
          <Map countries={countries}/>
          <img src={mapIcon} alt="world map" className="worldMapImg" />
        </main>
      </Link>
    </div>
  );
}

export default App;
// DONE:
//useEffect on pageload to fetch the country data set the state as an array of objects
// Pass props down to map { destructure to just send country name}
//This will display the Map component on pageload
// the basic layout will be a header with an h1 element
// a main with <Map /> component and image (image will eventually become the iteractive map.

// TO-DO:
//We will set up routes to render based on url
// testing! 