import axios from "axios"
const urlApi = 'https://www.breakingbadapi.com/api/';


export async function getCharacters() {
    const response = await axios.get(urlApi + 'characters');
    if (response.status !== 200) {
        throw new Error('Llamada characters no ha devuelto el resultado esperado');
    }
    return response.data;
}

export async function getCharacterById(id) {
    const response = await axios.get(urlApi + 'characters/' + id);
    if (response.status !== 200) {
        throw new Error('Llamada characters no ha devuelto el resultado esperado');
    }
    return response.data[0];
}

export async function getCharactersFiltereds(name) {
    const response = await axios.get(urlApi + 'characters?name=' + name);
    if (response.status !== 200) {
        throw new Error('Llamada characters no ha devuelto el resultado esperado');
    }
    return response.data;
}

export async function getCharacterQuote(author) {
    const response = await axios.get(urlApi + 'quote/random?author=' + author);
    if (response.status !== 200) {
        throw new Error('Llamada characters no ha devuelto el resultado esperado');
    }
    return response.data[0];
}