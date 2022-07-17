import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "../carAdd/style";
import TextField from '@material-ui/core/TextField';


class CarAdd extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {classes}=this.props
        return(
            <div>
                <div className={classes.car_id}>
                    <label>
                        Car Id
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.brand_Name}>
                    <label>
                        Brand Name:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.type}>
                    <label>
                       Type:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.images_of_Car}>
                    <label>
                        Image Of Car:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.number_of_passenger}>
                    <label>
                        Number of Passenger:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.transmission_type}>
                    <label>
                        Transmission Type:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.fuel_type}>
                    <label>
                        Fuel Type:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.price_of_duration}>
                    <label>
                        Price Of Duration:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.free_mileage_for_the_price_and_duration}>
                    <label>
                        Free Mileage For The Price And Duration:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.price_for_extra_KM}>
                    <label>
                        Price for extra KM:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.registration_number}>
                    <label>
                        Registration Number:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.car_color}>
                    <label>
                        Color:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
            </div>
        )
    }

}
export default withStyles(styleSheet)(CarAdd)