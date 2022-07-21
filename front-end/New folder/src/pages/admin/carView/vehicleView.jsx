import React, {Component, Fragment} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "../carAdd/style";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class CarView extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        function createData(name, calories, fat, carbs, protein , button) {
            return { name, calories, fat, carbs, protein , button};
        }

        const rows = [
            createData('C001', 'Nissan', 6.0, 24, 4.0, <Button variant="contained" color="secondary">delete</Button>),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3 ,<Button variant="contained" color="secondary">delete</Button>),
            createData('Eclair', 262, 16.0, 24, 6.0 ,<Button variant="contained" color="secondary">delete</Button>),
            createData('Cupcake', 305, 3.7, 67, 4.3,<Button variant="contained" color="secondary">delete</Button>),
            createData('Gingerbread', 356, 16.0, 49, 3.9 , <Button variant="contained" color="secondary">delete</Button>),
        ];

        const {classes} = this.props
        return (
            <Fragment>

                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <display4 style={{
                                backgroundColor: '#0000A5',
                                fontSize: '45px',
                                width: '400px',
                                height: '64px',
                                fontFamily: 'sans-serif',
                            }}>All Cars View
                            </display4>
                            <display4 style={{
                                width: '0',
                                height: '0',
                                borderTop: '32px solid transparent',
                                borderLeft: '66px solid #0000A5',
                                borderBottom: '32px solid transparent'
                            }}></display4>

                            <div style={{position: 'relative', width: '200px'}}></div>
                            <Button variant="contained" style={{
                                backgroundColor: 'white',
                                width: '115px',
                                height: '33px',
                                color: '#000080',
                                borderRadius: "15px",
                                boxShadow: '1px 1px 5px 0.2px',

                            }}>Menu</Button>
                        </Toolbar>
                    </AppBar>
                </div>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table" s>
                        <TableHead>
                            <TableRow>
                                <TableCell>Car Id</TableCell>
                                <TableCell align="right">Brand</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Four images of the car</TableCell>
                                <TableCell align="right">Number of passengers </TableCell>
                                <TableCell align="right">Transmission type </TableCell>
                                <TableCell align="right">Fuel Type</TableCell>
                                <TableCell align="right">Prices for the rent durations</TableCell>
                                <TableCell align="right">Free mileage for the price and duration</TableCell>
                                <TableCell align="right">Price for extra KM</TableCell>
                                <TableCell align="right">Registration number</TableCell>
                                <TableCell align="right">Color</TableCell>
                                <TableCell align="right">delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">{row.button}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>




            </Fragment>
        )
    }
}
export default withStyles(styleSheet)(CarView)