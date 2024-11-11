//Model

// Konsistent tegne område
let content = "";

//Funnet søk fra søkefelt
let foundIndex = "";

//Endrer confirm()
let changeMode = false;

let selectedIndex = null;
let inputs = "";


// Dummy data
const model = {
    data: {
        projects: [
        "Alpha Omega",
        "Minesviper",
        "Kabal",
        ],

        jsInfo: [
        "JavaScript er et høynivå-programmeringsspråk.",
        "Sammen med HTML og CSS er det en av grunnsteinene i moderne web-utvikling, og alle moderne nettlesere kan kjøre JavaScript-programmer uten utvidelser.", 
        "Språket kan brukes både til komplekse webapplikasjoner og som et enklere skriptspråk.",
        ],

        htmlInfo: [
        "HyperText HyperText Markup Language (HTML) er et markeringsspråk for formatering av nettsider med hypertekst og annen informasjon som kan vises i en nettleser.",
        ],
    },
}

/*let person = [
    {
    navn: 'Kevin',
    bosted: 'Stavanger',
    age: 32,

},
{
    navn: 'Therese',
    bosted: 'Sandefjord',
    age: 34,

},
]*/
