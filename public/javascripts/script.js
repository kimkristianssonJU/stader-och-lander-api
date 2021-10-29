function customCreateElement(tag, attribute, attributeName, parent) {
    const element = document.createElement(tag);
    if(attribute) {
        element.setAttribute(attribute, attributeName);
    }
    parent.appendChild(element);
    return element;
}

async function fetchThis(url) {
    const response = await fetch(url);
    const data = response.json();
    return data;
}

async function getList() {
    const wrapper = document.getElementById('main-wrapper');
    const countries = await fetchThis('/countries');
    const cities = await fetchThis('/cities');

    for (const country of countries) {
        const ul = customCreateElement("ul", "", "", wrapper);
        const h2 = customCreateElement("h2", "", "", ul);
        h2.textContent = country.countryname;

        for (const city of cities) {
            if(city.countryid === country.id) {
                const li = customCreateElement("ul", "", "", ul);
                const h3 = customCreateElement("h3", "", "", li);
                h3.textContent = city.stadname;
            }
        }
    }
}

getList();

/*
async function addNew() {
    const countryInput = document.getElementById('countryInput');
    const cityInput = document.getElementById('cityInput');
    const populationInput = document.getElementById('populationInput');

    const fs = require('fs');

    console.log("ok");

    fs.readFile('./land', (err, data) => {
        console.log(JSON.parse(data));
    });
}
document.getElementById('btn-add-new').addEventListener('click', addNew);
*/

const addNew = async () => {
    const countryInput = document.getElementById('countryInput');
    const cityInput = document.getElementById('cityInput');
    const populationInput = document.getElementById('populationInput');
    
    const newItem = {
        'country':countryInput.value,
        'city':cityInput.value,
        'population':populationInput.value
    };

    const response = await fetch('/addNewCountry', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newItem)
    });
    const data = await response.json();
    console.log(data);
};

document.getElementById('btn-add-new').addEventListener('click', addNew);