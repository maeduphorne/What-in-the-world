import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import mapIcon from '../../assets/WorldMap.jpg';
import Map from '../Map/Map';

function App() {
  return (
    <div className="App">
      <header>
        <h1>What In The World</h1>
      </header>
      <Link to="/" >
        <main className="mainDisplay">
          <Map />
          <img src={mapIcon} alt="world map" className="worldMapImg" />
        </main>
      </Link>
    </div>
  );
}

export default App;
//useEffect on pageload to fetch the country data set the state as an array of objects
//This will display the Map component on pageload
//We will set up routes to render based on url
// the basic layout will be a header with an h1 element
// a main with <Map /> component and image (image will eventually become the iteractive map.
// Pass props down to map { destructure to just send country name}
// testing! 