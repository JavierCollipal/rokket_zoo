import { connect } from 'react-redux';
import { createAnimalAsync, deleteAnimalAsync, fetchAnimalsAsync } from '../../reducers/animal';
import ZooTable from './ZooTable';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

export const Zoo = ({ animals, fetchAnimals, addAnimal, deleteAnimal }) => {
	const [dialog, setDialog] = useState(false);

	useEffect(() => {
		fetchAnimals();
	}, [fetchAnimals]);

	return (
		<div>
			<Button color="primary" onClick={() => setDialog(true)}>
				Añade un nuevo animal
			</Button>
			<ZooTable animals={animals} />
		</div>
	);
};

const mapStateToProps = state => {
	const animals = state.animals.data;
	return { animals };
};

const mapDispatchToProps = dispatch => ({
	fetchAnimals: () => dispatch(fetchAnimalsAsync()),
	addAnimal: animal => dispatch(createAnimalAsync({ newAnimal: animal })),
	deleteAnimal: id => dispatch(deleteAnimalAsync({ id: id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Zoo);
