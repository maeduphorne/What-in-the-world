const apiCalls = {
    fetchCountriesData() {
        return fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => response.json())
            .catch((error) => console.log(error.message));
    }
}

export default apiCalls;