import React from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core';

export const ZooTable = ({ animals, deleteAnimal }) => {
	return (
		<div>
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Nombre</TableCell>
							<TableCell align="right">Edad</TableCell>
							<TableCell align="right">Tipo</TableCell>
							<TableCell align="right">Raza</TableCell>
							<TableCell align="right">Acciones</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{animals.map(row => (
							<TableRow key={row._id}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.age}</TableCell>
								<TableCell align="right">{row.type}</TableCell>
								<TableCell align="right">{row.breed}</TableCell>
								<TableCell align="right">
									<Button onClick={() => deleteAnimal(row._id)} color="secondary">
										Borrar Animal
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

ZooTable.propTypes = {
	animals: PropTypes.array.isRequired,
};

export default ZooTable;
