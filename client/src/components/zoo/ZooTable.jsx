import React from 'react';
import PropTypes from 'prop-types';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@material-ui/core';

export const ZooTable = ({ animals }) => {
	return (
		<div>
			<TableContainer>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Nombre</TableCell>
							<TableCell align="right">Edad</TableCell>
							<TableCell align="right">Tipo</TableCell>
							<TableCell align="right">Estado</TableCell>
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
								<TableCell align="right">{row.state}</TableCell>
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
