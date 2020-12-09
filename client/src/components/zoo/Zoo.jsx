import { connect } from 'react-redux';
import { createAnimalAsync, deleteAnimalAsync, fetchAnimalsAsync } from '../../reducers/animal';
import ZooTable from './ZooTable';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import ZooForm from './ZooForm';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const dialogTitle = 'Crear Animal';

export const Zoo = ({ animals, fetchAnimals, addAnimal, deleteAnimal }) => {
	const [dialog, setDialog] = useState(false);
	//simulation of componentDidMount with effect hook
	useEffect(() => {
		fetchAnimals();
	}, [fetchAnimals]);

	const handleCreate = () => {
		setDialog(true);
	};

	const handleFormSubmit = payload => {
		addAnimal(payload);
	};
	return (
		<div>
			<Button color="primary" onClick={handleCreate}>
				Añade un nuevo animal
			</Button>
			<ZooTable animals={animals} deleteAnimal={deleteAnimal} />
			<Dialog
				open={dialog}
				onClose={() => setDialog(false)}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>

				<DialogContent>
					<ZooForm handleFormSubmit={handleFormSubmit} />
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setDialog(false)} color="primary">
						Cancelar
					</Button>
				</DialogActions>
			</Dialog>
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
