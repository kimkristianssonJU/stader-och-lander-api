import { fetchPost } from "./fetch_post.mjs";

export function addNew() {
    const countryInput = document.getElementById('countryInput');
    const cityInput = document.getElementById('cityInput');
    const populationInput = document.getElementById('populationInput');
    
    if(countryInput.value && cityInput.value && populationInput.value) {
        const newItem = {
            'country':countryInput.value,
            'city':cityInput.value,
            'population':Number(populationInput.value)
        };
    
        fetchPost('/addNewCountry', newItem);
    }
};