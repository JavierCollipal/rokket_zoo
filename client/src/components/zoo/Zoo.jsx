import { connect } from 'react-redux';
import { createAnimalAsync, deleteAnimalAsync, fetchAnimalsAsync } from '../../reducers/animal';
import ZooTable from './ZooTable';
import React, { useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import ZooForm from './ZooForm';

export const Zoo = ({ animals, fetchAnimals, addAnimal, deleteAnimal }) => {
	//simulation of componentDidMount with effect hook
	useEffect(() => {
		fetchAnimals();
	}, [fetchAnimals]);

	const handleFormSubmit = payload => {
		addAnimal(payload);
	};
	return (
		<div>
			<Grid container>
				<Grid item xs={12}>
					<Paper elevation={3}>
						<h1>Crea tus propios animales!</h1>
						<ZooForm handleFormSubmit={handleFormSubmit} />
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper elevation={2}>
						<ZooTable animals={animals} deleteAnimal={deleteAnimal} />
					</Paper>
				</Grid>
			</Grid>
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
