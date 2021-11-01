import { fetchThis } from './modules/fetch_this.mjs';
import { Country } from './modules/class_country.mjs';
import { City } from './modules/class_city.mjs';
import { addNew } from './modules/add_new.mjs';

async function getList() {
    const wrapper = document.getElementById('main-wrapper');
    const countries = await fetchThis('/countries');
    const cities = await fetchThis('/cities');

    for (const country of countries) {
        const newCountry = new Country(country.id, country.countryname);
        const countryCard = newCountry.createCard(wrapper);

        for (const city of cities) {
            if(city.countryid === country.id) {
                const newCity = new City(city.id, city.stadname, city.countryid, city.population);
                newCity.createCard(countryCard);
            }
        }
    }
}

getList();


document.getElementById('btn-add-new').addEventListener('click', addNew);