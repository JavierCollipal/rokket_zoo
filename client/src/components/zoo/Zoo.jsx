import { connect } from 'react-redux';
import { createAnimalAsync, fetchAnimalsAsync } from '../../reducers/animal';

export const Zoo = ({}) => {};

const mapStateToProps = state => {
	const animals = state.animals.data;
	return { animals };
};

const mapDispatchToProps = dispatch => ({
	fetchAnimal: () => dispatch(fetchAnimalsAsync()),
	addAnimal: animal => dispatch(createAnimalAsync({ newAnimal: animal })),
	deleteAnimal: id => dispatch(deleteAnimalAsync({ id: id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Zoo);
