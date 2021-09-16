import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import mapIcon from '../../assets/WorldMap.jpg';
import QuizPage from '../QuizPage/QuizPage';
import apiCalls from '../../api/apiCalls';
const { v4: uuidv4 } = require('uuid')


interface IState{
  countries: {
    name: string
    population: number
  }[],
  currentCountry: {
    name: string
    population: number
    capital: string
    borders: string[]
  } | undefined
  country: string
}

const App = () => {
  const [countries, setCountries] = useState<IState['countries']>([]);
  const [selectedCountry, setSelectedCountry]= useState<any>('Select A Country')
  const [displayCountry, setDisplayCountry] = useState<any>({})

  const countryNames = countries.map(country => { 
    return (
      <option 
        key={uuidv4()}
        >{country.name}
      </option> 
    )
  })
     // ********* Function to get chosen country for QuizPage component ********//
  const getCurrentCountry = () => {
    const country = countries.find(currCountry => currCountry.name.includes(selectedCountry))
    setDisplayCountry(country);
  }

        // ******* Button click function  ********//
  const handleSubmit = (e:any) => {
    e.preventDefault()
    getCurrentCountry()
    setSelectedCountry('Select A Country')
  }

  useEffect(() => {
    apiCalls.fetchCountriesData()
      .then((data) => setCountries(data))
  }, [])

  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>What In The World</h1>
        </Link>
      </header>
      <Route exact path="/" render={ () => {
        return (
          <main className="mainDisplay">
            <>
            <form 
              className="country-selector">
              <select 
                className="country-dropdown"
                onChange={(e) => setSelectedCountry(e.target.value)}>
                  <option value='' >
                   {selectedCountry}
                  </option>
                options={countryNames}
              </select>
              
                <button onClick={(e) => handleSubmit(e)} 
                  className="dropdown-btn">
                  <Link className= "country-submit" to={`/${selectedCountry}`}>
                  Submit Country
                  </Link>
                </button>
              
            </form>
            </>
            <img src={mapIcon} alt="world map" className="worldMapImg" />
          </main>
        )
      }
      }/>
      <Route exact path="/:country" render={ ({ match }) => {
        console.log('here',displayCountry)
        return ( 
          <QuizPage 
          currentCountry={displayCountry}
          country={displayCountry.name}
          />)
      }
    }/>
    </div>
  );
}

export default App;
// testing! 
// error handling that we need: 
// button should not submit if no country is selected and display an error for user to see
// [x]Clear out the values on a page refresh 
// Fetch catch errors and set to state
// set up a route to handle errors and display error held in state
