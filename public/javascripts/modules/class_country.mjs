import { City } from './class_city.mjs';
import { customCreateElement } from './create_element.mjs';
import { fetchPost } from './fetch_post.mjs';

export class Country {
    constructor(id, countryname) {
        this.id = id;
        this.countryname = countryname;
    }

    createCard(parent) {
        this.card = customCreateElement("ul", "", "", parent);
        this.headerName = customCreateElement("h2", "", "", this.card);
        this.eraseBtn = customCreateElement("button", "", "", this.card);

        this.eraseBtn.textContent = `Ta Bort ${this.countryname}`
        this.headerName.textContent = this.countryname;

        this.createAddCity(this.card)

        this.eraseBtn.addEventListener('click', () => {
            this.card.remove();
            fetchPost('/removeCountry', { 'countryID': this.id });
        });

        return this.card;
    }

    createAddCity(parent) {
        this.form = customCreateElement("form", "", "", parent);
        this.header = customCreateElement("h3", "", "", this.form);
        this.labelName = customCreateElement("label", "for", "new-city-name", this.form);
        this.inputName = customCreateElement("input", "id", "new-city-name", this.form);
        this.labelPopulation = customCreateElement("label", "for", "new-city-population", this.form);
        this.inputPopulation = customCreateElement("input", "id", "new-city-population", this.form);
        this.addBtn = customCreateElement("button", "", "", this.form);

        this.labelName.textContent = 'Name';
        this.labelPopulation.textContent = 'Invånarantal';
        this.addBtn.textContent = 'Lägg Till';
        this.header.textContent = 'Lägg Till Ny Stad';

        this.addBtn.addEventListener('click', async () => {
            const newCity = new City(0, this.inputName.value, this.id, this.inputPopulation.value);
            fetchPost('/addNewCity', newCity);
        });
    }
}