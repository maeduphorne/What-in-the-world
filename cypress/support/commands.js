// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// 'GET', 'https://restcountries.eu/rest/v2/all'
Cypress.Commands.add('FetchData', (method, url) => {
    // cy.visit('http://localhost:3000/')
    cy.intercept(`${method}`,`${url}`, {
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
})

Cypress.Commands.add('Fetch404Data', (method, url) => {
    cy.intercept(`${method}`,`${url}`, {
        statusCode: 404,
        body: {}
    })
})

Cypress.Commands.add('Fetch500Data', (method, url) => {
    cy.intercept(`${method}`,`${url}`, {
        statusCode: 500,
        body: {}
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
