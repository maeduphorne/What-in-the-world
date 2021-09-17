import { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
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
  const [error, setError] = useState<string>('');
  const [displayCountry, setDisplayCountry] = useState<any>({})
  const history = useHistory();

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

   // ******* Select error handle  ********//
   const errorCheck = (e: any) => {
    e.preventDefault()
    if (selectedCountry.includes('Select A Country')) {
      setError('Please select a country')
    } else {
        handleSubmit(e)
    }
  }

   // ******* Button click function  ********//
  const handleSubmit = (e:any) => {
    getCurrentCountry()
    history.push(`/${selectedCountry}`)
    setSelectedCountry('Select A Country') 
    setError('')
  }


  useEffect(() => {
    apiCalls.fetchCountriesData()
      .then((data) => setCountries(data))
  }, [])
  
  return (
    <div className="App">
      <header>
        <Link to="/" className="home-click">
          <h1>What In The World</h1>
        </Link>
      </header>
      <Route exact path="/" render={ () => {
        return (
          <main className="mainDisplay">
            <section>
            <form 
              className="country-selector">
              <select 
                className="country-dropdown"
                onChange={(e) => setSelectedCountry(e.target.value)}>
                  <option value=''>
                    {selectedCountry}
                  </option>
                options={countryNames}
              </select>
                <button onClick={(e) => errorCheck(e)} 
                  className="dropdown-btn">
                  Submit Country
                </button>
              {error !== '' && <p>{error}</p>}
            </form>
            </section>
            <img src={mapIcon} alt="world map" className="worldMapImg" />
          </main>
        )
      }
      }/>
      <Route exact path="/:country" render={ ({ match }) => {
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
