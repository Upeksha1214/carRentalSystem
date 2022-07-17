import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "../carAdd/style";
import TextField from '@material-ui/core/TextField';


class CarAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.all}>
                <nav className={classes.nav}>
                    <h1 style={{color: 'white'}}>hello</h1>
                </nav>

                <div className={classes.main}>

                    <div className={classes.form}>

                        <div className={classes.lbl}>
                            <label>Car Id:</label>
                            <label>Brand Name:</label>
                            <label>Type:</label>
                            <label>Image Of Car:</label>
                            <label>Number of Passenger:</label>
                            <label>Transmission Type:</label>
                            <label>Fuel Type:</label>
                            <label>Price Of Duration:</label>
                            <label>Free Mileage For The Price And Duration:</label>
                            <label>Price for extra KM:</label>
                            <label>Registration Number:</label>
                            <label> Color:</label>
                        </div>
                        <div className={classes.txt}>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                            <TextField style={{backgroundColor: '#00FFFF', width: '500px'}}></TextField>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default withStyles(styleSheet)(CarAdd)