import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { useForm } from 'react-hook-form';

const dialogTitle = 'Crear Animal';

export const ZooForm = ({ dialog, setDialog, handleFormSubmit }) => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => handleFormSubmit(data);
	return (
		<Dialog open={dialog} onClose={() => setDialog(false)} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>

			<DialogContent>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input name="firstName" ref={register} placeholder="First name" />

					<input name="lastName" ref={register} placeholder="Last name" />

					<select name="category" ref={register}>
						<option value="">Select...</option>
						<option value="A">Category A</option>
						<option value="B">Category B</option>
					</select>

					<Button type="submit">Guardar</Button>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setDialog(false)} color="primary">
					Cancelar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ZooForm;
