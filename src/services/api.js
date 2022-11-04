import axios from "axios"


const card = 'n4whluu0idld'

const api = axios.create({
    // baseURL: `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`,
    baseURL: `https://rickandmortyapi.com/api/`,
})

 export const animalsRand = '/animals/rand'



export default api;

