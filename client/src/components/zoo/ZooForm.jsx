import React from 'react';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { Input, TextField } from '@material-ui/core';

export const ZooForm = ({ handleFormSubmit }) => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => handleFormSubmit(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField name="name" inputRef={register} placeholder="Nombre" />
			<TextField name="breed" inputRef={register} placeholder="Raza" />
			<Input type="number" name="age" inputRef={register} placeholder="Edad" />
			<select name="type" ref={register}>
				<option value="Mamífero">Mamifero</option>
				<option value="Anfibio">Anfibio</option>
				<option value="Serpientessss">Serpientessss</option>
			</select>
			<Button type="submit">Guardar</Button>
		</form>
	);
};

export default ZooForm;
