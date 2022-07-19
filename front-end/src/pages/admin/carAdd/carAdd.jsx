import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "../carAdd/style";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";


class CarAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <div className={classes.all}>

                    <div className={classes.root}>
                        <AppBar position="static">
                            <Toolbar>
                                <display4 style={{
                                    backgroundColor: 'red',
                                    fontSize: '25px',
                                    width: '400px',
                                    height: '64px',
                                }}> Car Adding Form
                                </display4>
                                <display4 style={{width: '0', height: '0', borderTop: '32px solid transparent', borderLeft: '66px solid red',
                                    borderBottom: '32px solid transparent'
                                }}></display4>

                                <div style={{position: 'relative', width: '200px'}}></div>
                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '120px',
                                    height: '63px',
                                    color: ''
                                }}>Menu</Button>
                            </Toolbar>
                        </AppBar>
                    </div>

                    <div className={classes.main}>

                        <Grid container className={classes.form_background} spacing={3} onAnimationStart={'animate'}>

                            <Grid item><div style={{width : '100vw' , height : '20%'}}></div> </Grid>

                            <Grid item> <TextField id="outlined-basic" label="Car Id" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Brand" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Type" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Four images of the car" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Number of passengers" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Transmission type" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Fuel Type" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Prices for the rent durations" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Free mileage for the price and duration" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Price for extra KM" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Registration number" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Color" variant="outlined"/></Grid>


                            <div><Button variant="contained" style={{
                                backgroundColor: 'blue',
                                width: '120px',
                                height: '63px',
                                color: ''
                            }}>Add</Button>

                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '63px',
                                    color: ''
                                }}>Clear all</Button>

                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '63px',
                                    color: ''
                                }}>Back</Button></div>

                            <Grid item><div style={{width : '100vw' , height : '20%'}}></div> </Grid>
                        </Grid>
                    </div>
                </div>
            </Fragment>
        );
    }

}

export default withStyles(styleSheet)(CarAdd)
