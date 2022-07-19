import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import {styleSheet} from "../../admin/driverAdd/style";
import {withStyles} from "@material-ui/core";


class Driver extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {classes}=this.props
        render(
            <div>
                <div className={classes.driver_id}>
                    <label>
                        Driver Id:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.email}>
                    <label>
                        Email:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.User_name}>
                    <label>
                        User Name:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.new_password}>
                    <label>
                        New Password:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.NIC_number_and_photo}>
                    <label>
                        NIC Number and Photo:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.driving_number_and_photo}>
                    <label>
                        Driving Number And Photo:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.address}>
                    <label>
                        Address:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
                <div className={classes.contact_number}>
                    <label>
                        Contact Number:
                        <TextField style={{backgroundColor:'#00FFFF',width:'500px' }}></TextField>
                    </label>
                </div>
            </div>
        );
    }
}
export default withStyles(styleSheet)(Driver)