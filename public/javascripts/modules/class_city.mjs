import { customCreateElement } from "./create_element.mjs";
import { fetchPost } from "./fetch_post.mjs";

export class City {

    constructor(id, stadname, countryid, population) {
        this.id = id;
        this.stadname = stadname;
        this.countryid = countryid;
        this.population = population;
    }

    createCard(parent) {
        this.card = customCreateElement("li", "id", this.id, parent);
        this.paraName = customCreateElement("p", "", "", this.card);
        this.paraPopulation = customCreateElement("p", "", "", this.card);
        this.eraseBtn = customCreateElement("button", "", "", this.card);

        this.paraName.textContent = this.stadname;
        this.paraPopulation.textContent = this.population;
        this.eraseBtn.textContent = `Ta Bort ${ this.stadname }`;

        this.eraseBtn.addEventListener('click', () => {
            this.card.remove();
            fetchPost('/removeCity', { 'cityID':this.id });
        });

        return this.card;
    }
}