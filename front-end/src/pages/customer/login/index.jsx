import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {AiFillPhone} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import logo from "../../../assets/image/logo.svg"


class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.main_div}>


                <div className={classes.title_container}>
                    <BottomNavigation className={classes.navgation_container}>

                        <div className={classes.icon_container}>
                            <div className={classes.mobileIcon_container}>
                                <BottomNavigationAction label="Recants" icon={<AiFillPhone/>}/>
                                <ul className={classes.mobileNumberList}>
                                    <li>0711923150</li>
                                    <li>0778187735</li>
                                </ul>
                            </div>

                            <div className={classes.mail_container}>
                                <BottomNavigationAction label="Favorites" icon={<AiOutlineMail/>}/>
                                <ul className={classes.mailName}>
                                    upekshasachintha@gmail.com
                                </ul>
                            </div>

                            <div className={classes.location_container}>
                                <BottomNavigationAction label="Nearby" icon={<ImLocation/>}/>
                                <ul className={classes.location_deatail}>
                                    '123',colombo road,galle
                                </ul>
                            </div>
                        </div>
                    </BottomNavigation>
                    <Divider style={{borderTop:'4px solid '}}/>


                    <div className={classes.navBar_container}>


                        <img src={logo} alt=""/>

                        <div className={classes.button_container}>
                            <Button variant="contained" style={{backgroundColor:'green', color: 'white'}}>
                                Home
                            </Button>

                            <div style={{color:'white'}}>Cars</div>
                            <div style={{color:'white'}}>Pages</div>
                            <div style={{color:'white'}}>Service</div>
                            <div style={{color:'white'}}>Blog</div>
                            <div style={{color:'white'}}>Contact</div>

                        </div>



                    </div>



                </div>



            </div>

    );
    }
}

export default withStyles(styleSheet)(Login)