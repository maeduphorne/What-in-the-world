describe('Main Page Render', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        });

    it('Should have a header with the App\'s name on page load & an image of a map', () => {
        cy.get('h1').contains('What In The World')
        cy.get('.worldMapImg').should('be.visible')
    })

    // should display a drop down form of countries on load
    it('Should display a drop down menu on load', () => {
        cy.get('.country-dropdown')
            .should('be.visible')
            .should('have.value', '')
            .contains('option')
        })   
    // should be able to select a country and submit the country on button click 
    it('Should be able to select a country', () => {
        cy.get('.country-dropdown')
            .select('Uzbekistan')
            .should('be.visible')
    })

    it('Should be able to select a country, should update url to matching path and display country Quiz Page', () => {
        cy.get('.country-dropdown')
            .select('Uzbekistan')
            .get('.country-submit').click()
            .url().should('eq', 'http://localhost:3000/Uzbekistan')
            .url().should('not.eq', 'http://localhost:3000/')
            .get('h1').contains('What In The World')
            .get('h2').contains('Uzbekistan')
            .get('.answer-input').should('be.visible')
    })

})

describe('Main page fetch', () => {
    it('Should create a drop down menu using all country names on page load', () => {
        cy.visit('http://localhost:3000/')
        cy.intercept('GET', 'https://restcountries.eu/rest/v2/all', {
            statusCode: 200,
            body: {
                    countries: 
                    [
                        {
                            "name": "Uzbekistan",
                            "topLevelDomain": [
                            ".uz"
                            ],
                            "alpha2Code": "UZ",
                            "alpha3Code": "UZB",
                            "callingCodes": [
                            "998"
                            ],
                            "capital": "Tashkent",
                            "altSpellings": [
                            "UZ",
                            "Republic of Uzbekistan",
                            "O‘zbekiston Respublikasi",
                            "Ўзбекистон Республикаси"
                            ],
                            "region": "Asia",
                            "subregion": "Central Asia",
                            "population": 31576400,
                            "latlng": [
                            41,
                            64
                            ],
                            "demonym": "Uzbekistani",
                            "area": 447400,
                            "gini": 36.7,
                            "timezones": [
                            "UTC+05:00"
                            ],
                            "borders": [
                            "AFG",
                            "KAZ",
                            "KGZ",
                            "TJK",
                            "TKM"
                            ],
                            "nativeName": "O‘zbekiston",
                            "numericCode": "860",
                            "currencies": [
                            {
                            "code": "UZS",
                            "name": "Uzbekistani so'm",
                            "symbol": null
                            }
                            ],
                            "languages": [
                            {
                            "iso639_1": "uz",
                            "iso639_2": "uzb",
                            "name": "Uzbek",
                            "nativeName": "Oʻzbek"
                            },
                            {
                            "iso639_1": "ru",
                            "iso639_2": "rus",
                            "name": "Russian",
                            "nativeName": "Русский"
                            }
                            ],
                            "translations": {
                            "de": "Usbekistan",
                            "es": "Uzbekistán",
                            "fr": "Ouzbékistan",
                            "ja": "ウズベキスタン",
                            "it": "Uzbekistan",
                            "br": "Uzbequistão",
                            "pt": "Usbequistão",
                            "nl": "Oezbekistan",
                            "hr": "Uzbekistan",
                            "fa": "ازبکستان"
                            },
                            "flag": "https://restcountries.eu/data/uzb.svg",
                            "regionalBlocs": [],
                            "cioc": "UZB"
                        }
                    ]
                }
        })
        cy.get('.country-dropdown').select('Uzbekistan')
        cy.get('.country-submit').click()
        .get('h2').contains('Uzbekistan')
        .get('.answer-input').should('be.visible')
        .get('.submit-button').should('be.visible')
    }) 
})