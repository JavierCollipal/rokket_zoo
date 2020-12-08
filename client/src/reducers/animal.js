import animalApi from '../api/animal';
import { makeType } from '../utils/functions/redux/makeType';

const typeMaker = makeType('ANIMAL');

const ADD = typeMaker('ADD');
const DELETE = typeMaker('DELETE');
const FETCH = typeMaker('FETCH');

const fetchAnimals = animals => ({
	type: FETCH,
	animals,
});

const deleteOne = id => ({
	type: DELETE,
	id,
});

const createOne = animal => ({
	type: ADD,
	animal,
});

const initialState = {
	data: [],
};
//thunks
export const fetchAnimalsAsync = () => {
	return async disptach => {
		try {
			const response = await animalApi.fetchAnimals();
			const { data } = response;
			disptach(fetchAnimals(data));
		} catch (e) {
			console.error(e);
		}
	};
};
export const deleteAnimalAsync = ({ id }) => {
	return async dispatch => {
		try {
			await animalApi.deleteAnimal(id);
			dispatch(deleteOne(id));
		} catch (e) {
			console.error(e);
		}
	};
};
export const createAnimalAsync = ({ newAnimal }) => {
	return async dispatch => {
		try {
			const response = await animalApi.createAnimal(newAnimal);
			const { animal } = response.data;
			dispatch(createOne(animal));
		} catch (e) {
			console.error(e);
		}
	};
};

const animalReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH:
			return { ...state, data: action.animals };
		case ADD:
			return { ...state, data: [...state.data, { ...action.animal }] };
		case DELETE:
			return {
				...state,
				data: state.data.filter(animal => animal._id !== action.id),
			};
		default:
			return { ...state };
	}
};

export default animalReducer;
