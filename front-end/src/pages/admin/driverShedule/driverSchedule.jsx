import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "../../admin/driverShedule/driverSheduleStyle";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

class DriverSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            front: null,
            backImage: null,
        }
    }

    render() {

        function createData(name, calories, fat, carbs, protein, button) {
            return {name, calories, fat, carbs, protein, button};
        }

        const rows = [
            /* createData('C001', 'Nissan', 6.0, 24, 4.0, <Button variant="contained" color="secondary">delete</Button>),
             createData('Ice cream sandwich', 237, 9.0, 37, 4.3 ,<Button variant="contained" color="secondary">delete</Button>),
             createData('Eclair', 262, 16.0, 24, 6.0 ,<Button variant="contained" color="secondary">delete</Button>),
             createData('Cupcake', 305, 3.7, 67, 4.3,<Button variant="contained" color="secondary">delete</Button>),
             createData('Gingerbread', 356, 16.0, 49, 3.9 , <Button variant="contained" color="secondary">delete</Button>),*/
        ];
        const {classes} = this.props
        return (
            <Fragment>
                <div className={classes.all}>

                    <div className={classes.root}>
                        <AppBar position="static">
                            <Toolbar>
                                <display4 style={{
                                    backgroundColor: '#0000A5',
                                    fontSize: '30px',
                                    width: '400px',
                                    height: '64px',
                                    fontFamily: 'sans-serif',
                                }}> Driver Schedule Manage Form
                                </display4>
                                <display4 style={{
                                    width: '0',
                                    height: '0',
                                    borderTop: '32px solid transparent',
                                    borderLeft: '66px solid #0000A5',
                                    borderBottom: '32px solid transparent'
                                }}></display4>

                                <div style={{position: 'relative', width: '50px'}}></div>

                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '115px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Home</Button>

                                <div style={{position: 'relative', width: '10px'}}></div>

                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '170px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Driver Manage </Button>

                                <div style={{position: 'relative', width: '10px'}}></div>

                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '180px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Car Manage Form</Button>

                                <div style={{position: 'relative', width: '10px'}}></div>

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

                    <div className={classes.driver_main}>

                        <Grid container className={classes.form_background} spacing={3} onAnimationStart={'animate'}>

                            <Grid item>
                                <div style={{width: '100vw', height: '20%'}}></div>
                            </Grid>

                            <Grid item> <TextField id="outlined-basic" label="Schedule Id" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Driver Id" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Car Id" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Date" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Time" variant="outlined"/></Grid>


                            <Grid item>
                                <div style={{width: '100vw', height: '20%'}}></div>
                            </Grid>

                        </Grid>

                        <Grid container className={classes.button_background} spacing={2}>
                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Add</Button></Grid>

                            <Grid item> <TextField id="outlined-basic" label="Search Id" variant="outlined"/></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Search</Button></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Update</Button></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Clear all</Button></Grid>

                            <Grid item>

                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Back</Button>
                            </Grid>

                        </Grid>
                    </div>
                </div>
                <div className={classes.tableContainer}>
                    <div className={classes.tableView}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table" s>
                                <TableHead style={{backgroundColor: '#98AFC7'}}>
                                    <TableRow>

                                        <TableCell align="right">Schedule Id</TableCell>
                                        <TableCell>Driver Id</TableCell>
                                        <TableCell align="right">Driver Id</TableCell>
                                        <TableCell align="right">Car Id</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                        <TableCell align="right">Time</TableCell>
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
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(styleSheet)(DriverSchedule)