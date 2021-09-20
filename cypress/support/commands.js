
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
