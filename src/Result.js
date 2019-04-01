import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    root1: {
        ...theme.typography.button,
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing.unit,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('COMPUTER ORGANISATION AND ARCHITECTURE', 14, 60, 74, 'B'),
    createData('JAVA PROGRAMMING', 16, 70, 86, 'A'),
    createData('WEB PROGRAMMING USING PHP', 10, 67, 77, 'B'),
    createData('PRINCIPLES AND SOFTWARE ENGINEERING', 8, 37, 45,'E'),
    createData('NON CONVENTIONAL ENERGY SOURCES', 19, 60, 79, 'A'),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <div className={props.classes.root1}>{"EXAMINATION RESULT - SEMESTER 5 ABDURAHIMAN"}</div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>

                        <TableCell>	Course Title</TableCell>
                        <TableCell align="right">CA Mark</TableCell>
                        <TableCell align="right">SEE Mark</TableCell>
                        <TableCell align="right">Total Mark</TableCell>
                        <TableCell align="right">CA Mark</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
