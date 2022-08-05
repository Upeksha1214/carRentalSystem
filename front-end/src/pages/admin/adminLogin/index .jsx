import React, {Component} from "react";
import {styleSheet} from "./style ";
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";
import ReactTextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import adminService from "../../../services/adminService"
import {Navigate} from "react-router-dom";


class AdminLogin extends Component{
    constructor(props) {
        super(props);
        this.state={
            userName : '',
            password : '',


            driverHomeDiplay : false
        }
    }

    loginAdmin=async () =>{
        let res = await adminService.checkAdminUserAccount(this.state.userName,this.state.password);
        if (res.code != 'ERR_BAD_REQUEST') {
            alert(res.data.message);
            this.setState({
                driverHomeDiplay : true
            })
        } else {
            if (res.response.data.message=="Password Incorrect"){
                /*this.setState({passwordError : true , passwordErrorMessage : res.response.data.message})*/
                alert(res.response.data.message)
            }else if(res.response.data.message=="userName Incorrect"){
                alert(res.response.data.message)
                /*this.setState({userNameError : true , userNameErrorMessage : res.response.data.message})*/
            }
        }

    }

    render() {
        const{classes}=this.props;
        return(
            <>
                {

                    this.state.driverHomeDiplay ? <Navigate to="/manageCar" replace={true} /> :
                        <div className={classes.mainContainer}>

                        <div className={classes.loginMainContainer}>

                            <div className={classes.loginHeader}>
                                <Box fontFamily="Monospace"  fontSize="h5.fontSize" m={1}>
                                    Admin Login Form
                                </Box></div>

                            <div className={classes.loginBodyContainer}>
                                <ReactTextField
                                    value={this.state.user}
                                    onChange={(e) =>{
                                        this.setState({
                                            userName : e.target.value
                                        })
                                    }}
                                    style={{width : '400px'}} id="outlined-search" label="UserName" type="search" variant="outlined" />

                                <ReactTextField
                                    value={this.state.password}
                                    onChange={(e) =>{
                                        this.setState({
                                            password : e.target.value
                                        })
                                    }}
                                    style={{width : '400px'}}
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"
                                />

                            </div>

                            <div className={classes.loginFooterContainer}>

                                <Button
                                    onClick={() =>{
                                        console.log("login ok")
                                        this.loginAdmin()

                                    }}
                                    style={{width : '400px'}} variant="contained" color="primary">
                                    Login Here
                                </Button>

                            </div>



                        </div>

                    </div>
                }
            </>





        )
    }
}
export default withStyles(styleSheet) (AdminLogin)