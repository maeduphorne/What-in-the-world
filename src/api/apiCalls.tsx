const apiCalls = {

    fetchCountriesData: ()  => {
        return fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => response.json())
            .catch((error) => console.log(error.message));
    }

}

const checkForErrors = (response:any) => {
  if(response.ok) {
    return response.json();
  } else {
    throw `${response.status} ERROR. Could not access server data.`
  }
} 

export default apiCalls;