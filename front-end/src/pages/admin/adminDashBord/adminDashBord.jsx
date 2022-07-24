import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "../../admin/adminDashBord/adminDashBordStyle"
import logo from "../../../assets/image/car2.jpg"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {AiFillPhone, AiOutlineMail} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Grid from "@material-ui/core/Grid";

class AdminDashBord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <div className={classes.allContainer} style={{backgroundColor: 'black'}}>
                    <div >
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <display4 style={{
                                   /* backgroundColor: '#0000A5',*/
                                    fontSize: '43px',
                                    width: '400px',
                                    height: '64px',
                                    fontFamily: 'sans-serif',
                                }}> Admin Dash Bord
                                </display4>
                               {/* <display4 style={{
                                    width: '0',
                                    height: '0',
                                    borderTop: '32px solid transparent',
                                    borderLeft: '66px solid #0000A5',
                                    borderBottom: '32px solid transparent'
                                }}></display4>*/}


                            </Toolbar>
                        </AppBar>
                    </div>

                    <div className={classes.buttonAddContainer} style={{marginTop:'120px' ,right:'50px'}}>

                        <Button variant="contained" style={{
                            top:'5px',
                            backgroundColor: 'white',
                            width: '120px',
                            height: '50px',
                            color: '#3BB9FF',
                            borderRadius: "15px",
                            boxShadow: '1px 1px 5px 0.2px',
                        }}>Car Manage</Button>

                        <Button variant="contained" style={{
                            top:'20px',
                            backgroundColor: 'white',
                            width: '120px',
                            height: '50px',
                            color: '#3BB9FF',
                            borderRadius: "15px",
                            boxShadow: '1px 1px 5px 0.2px',
                        }}>Driver Manage</Button>

                        <Button variant="contained" style={{
                            top:'40px',
                            backgroundColor: 'white',
                            width: '120px',
                            height: '50px',
                            color: '#3BB9FF',
                            borderRadius: "15px",
                            boxShadow: '1px 1px 5px 0.2px',
                        }}>Driver Shedule</Button>

                        <Button variant="contained" style={{
                            top:'60px',
                            backgroundColor: 'white',
                            width: '120px',
                            height: '50px',
                            color: '#3BB9FF',
                            borderRadius: "15px",
                            boxShadow: '1px 1px 5px 0.2px',
                        }}>Rental Request</Button>

                        <Button variant="contained" style={{
                            top:'80px',
                            backgroundColor: 'white',
                            width: '120px',
                            height: '50px',
                            color: '#3BB9FF',
                            borderRadius: "15px",
                            boxShadow: '1px 1px 5px 0.2px',
                        }}>Customer Manage</Button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withStyles(styleSheet)(AdminDashBord)

