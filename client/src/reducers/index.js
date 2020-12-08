import { combineReducers } from 'redux';
import animalReducer from './animal';

const rootReducer = combineReducers({
	animals: animalReducer,
});

export default rootReducer;
