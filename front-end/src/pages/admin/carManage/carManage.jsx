import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from ".//style";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import axios from "../../../axios.js";


class CarManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,

            frontView : null,
            backView : null,
            sideView : null,
            interiorView : null,
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
                                    fontSize: '45px',
                                    width: '400px',
                                    height: '64px',
                                    fontFamily: 'sans-serif',
                                }}>Car Manage Form
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
                                    width: '250px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Rental Request Manage </Button>

                                <div style={{position: 'relative', width: '10px'}}></div>

                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '180px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Driver Manage </Button>

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

                    <div className={classes.main}>

                        <Grid container className={classes.form_background} spacing={3} onAnimationStart={'animate'}>

                            <Grid item>
                                <div style={{width: '100vw', height: '20%'}}></div>
                            </Grid>

                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Car Id"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Brand" variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Type" variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Number of passengers"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Transmission type"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Fuel Type"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic"
                                                   label="Prices for the rent durations" variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic"
                                                   label="Free mileage for the price and duration" variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Price for extra KM"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Registration number"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Color" variant="outlined"/></Grid>


                            <Grid item className={classes.imageContainer}>

                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage:"url(" +this.state.frontView+ ")",
                                    backgroundSize: 'cover'
                                }}></div>


                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage:"url(" +this.state.backView+ ")",
                                    backgroundSize: 'cover'
                                }}></div>


                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage:"url(" +this.state.sideView+ ")",
                                    backgroundSize: 'cover'
                                }}></div>


                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage:"url(" +this.state.interiorView+ ")",
                                    backgroundSize: 'cover'
                                }}></div>


                            </Grid>

                            <Grid item className={classes.uploadImageButton}>
                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file01"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            frontImage: e.target.files[0],
                                            frontView : URL.createObjectURL(e.target.files[0])
                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file01">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </div>
                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file02"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            backImage: e.target.files[0],
                                            backView : URL.createObjectURL(e.target.files[0])
                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file02">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </div>
                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file03"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            sideImage: e.target.files[0],
                                            sideView : URL.createObjectURL(e.target.files[0])
                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file03">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </div>
                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file04"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            interiorImage: e.target.files[0],
                                            interiorView : URL.createObjectURL(e.target.files[0])
                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file04">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </div>

                            </Grid>


                            <Grid item>
                                <div style={{width: '100vw', height: '40%'}}></div>
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


                                }}
                                        onClick={async () => {

                                            var bodyFormData = new FormData();


                                            bodyFormData.append('param', this.state.frontImage);
                                            bodyFormData.append('param', this.state.backImage);
                                            bodyFormData.append('param', this.state.sideImage);
                                            bodyFormData.append('param', this.state.interiorImage);


                                            axios({
                                                method: 'post',
                                                url: 'Car/addCarImage?carId=Car001',
                                                headers: {"Content-Type": "multipart/form-data"},
                                                data: bodyFormData


                                            })
                                                .then(function (response) {
                                                    console.log(response);
                                                    alert("Car Image added Complete");
                                                })
                                                .catch(function (error) {
                                                    console.log(error);
                                                    alert("Car image add fail..")
                                                });

                                        }}

                                >Add</Button></Grid>

                            <Grid item> <TextField id="outlined-basic" label="Search Id" variant="outlined"/></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}
                                >Search</Button></Grid>

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
                    <div className={classes.tableContainer} style={{}}>
                        <div className={classes.tableView}>
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
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }

}

export default withStyles(styleSheet)(CarManage)
