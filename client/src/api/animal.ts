import axios from 'axios';
import {apiUrl} from "../constants";

const urlWIthId = (url: string, id: string) => `${url}/${id}`;

const fetchAnimals = async () => await axios.get(apiUrl);
const createAnimal = async (animalData: any) => await axios.post(apiUrl, animalData).then(res => res.data.cat);
const deleteAnimal = async ( id: string) => await axios.delete(urlWIthId(apiUrl, id));

const animalApi = {
  fetchAnimals,
  createAnimal,
  deleteAnimal
};
export default animalApi;
