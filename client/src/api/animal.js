import axios from 'axios';
import { apiUrl } from '../constants';

const urlWIthId = (url, id) => `${url}/${id}`;

const fetchAnimals = async () => await axios.get(apiUrl);
const createAnimal = async animalData => await axios.post(apiUrl, animalData);
const deleteAnimal = async id => await axios.delete(urlWIthId(apiUrl, id));

const animalApi = {
	fetchAnimals,
	createAnimal,
	deleteAnimal,
};
export default animalApi;
