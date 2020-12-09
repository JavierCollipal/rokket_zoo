import { connect } from 'react-redux';
import { createAnimalAsync, deleteAnimalAsync, fetchAnimalsAsync } from '../../reducers/animal';
import ZooTable from './ZooTable';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import ZooForm from './ZooForm';

export const Zoo = ({ animals, fetchAnimals, addAnimal, deleteAnimal }) => {
	const [formData, setFormData] = useState();
	const [dialog, setDialog] = useState(false);

	useEffect(() => {
		fetchAnimals();
	}, [fetchAnimals]);

	const handleCreate = () => {
		setFormData(null);
		setDialog(true);
	};

	const handleFormSubmit = payload => {
		console.log(payload);
		setDialog(false);
		addAnimal(payload);
	};
	return (
		<div>
			<Button color="primary" onClick={handleCreate}>
				Añade un nuevo animal
			</Button>
			<ZooTable animals={animals} deleteAnimal={deleteAnimal} />

			<ZooForm
				dialog={dialog}
				setDialog={setDialog}
				handleFormSubmit={handleFormSubmit}
				//if you're working with update, this prop is very useful
				initialValues={formData}
			/>
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
