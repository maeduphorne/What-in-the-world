// import React, { useEffect, useState } from 'react';
// import './Map.css';
// import QuizPage from '../QuizPage/QuizPage'
// const { v4: uuidv4 } = require('uuid')
// // this npm package helps us to set unique keys for components

// interface IProps{
//   countries: {
//     name: string
//     population: number
//   }[]
// }

// const Map: React.FC<IProps> = ( {countries} ) => {
//   // const [selectedCountry, setSelectedCountry]= useState<any>('Select A Country')
  
//   // const [displayCountry, setDisplayCountry] = useState<boolean>(false)
//   // const countryNames = countries.map(country => { 
//   //   return <option key={uuidv4()}>{country.name}</option>
//   // })

//    // ********* Function to get chosen country for QuizPage component ********//
//    const getCurrentCountry = () => {
//    const country = countries.find(currCountry => currCountry.name.includes(selectedCountry))
//    return country;
//   }
//    // ******* Button click function  ********//
//    const handleSubmit = (e:any) => {
//    e.preventDefault()
//     if(getCurrentCountry()) {
//     setDisplayCountry(true)
//   }
//  }

//   return (
//     <>
//     <form 
//       className="country-selector">
//       <select 
//         className="country-dropdown"
//         onChange={(e) => setSelectedCountry(e.target.value)}>
//           <option value="">
//             {selectedCountry}
//           </option>
//         options={countryNames}
//       </select>
//       <button onClick={(e) => handleSubmit(e)} 
//         className="dropdown-btn">
//         Submit Country
//       </button>
//     </form>

//     {displayCountry && <QuizPage questions={
//       [
//        'What is the population of',
//        'What is the capital of',
//        'How many countries border'
//       ]
//    } 
//     currentCountry={getCurrentCountry()}/>}
//     </>
//   )
// }

// export default Map;
// //This will contain our drop-down menu which will need to be populated with the country names
// //We will take the prop and map over to display all names to render the drop-down
// //Testing needed
export {};