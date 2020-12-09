import React from 'react';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { Input, MenuItem, Select, TextField } from '@material-ui/core';

export const ZooForm = ({ handleFormSubmit }) => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => handleFormSubmit(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField name="name" inputRef={register} placeholder="Nombre" />
			<TextField name="breed" inputRef={register} placeholder="Raza" />
			<Input type="number" name="age" inputRef={register} placeholder="Edad" />
			<label htmlFor="typeSelect"> Tipo de animal </label>
			<select id="typeSelect" name="type" ref={register}>
				<option value="Mamífero">Mamífero</option>
				<option value="Anfibio">Anfibio</option>
				<option value="Reptil">Reptil</option>
			</select>
			<Button type="submit" color="primary">
				Guardar
			</Button>
		</form>
	);
};

export default ZooForm;
