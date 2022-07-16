import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {AiFillPhone} from "react-icons/ai";
import Divider from "@material-ui/core/Divider";
import myImage from "../../../assets/image/A.jpeg";


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
                                <BottomNavigationAction label="Favorites" icon={<AiFillPhone/>}/>
                                <ul className={classes.mailName}>
                                    upekshasachintha@gmail.com
                                </ul>
                            </div>

                            <div className={classes.location_container}>
                                <BottomNavigationAction label="Nearby" icon={<AiFillPhone/>}/>
                                <ul className={classes.location_deatail}>
                                    '123',colombo road,galle
                                </ul>
                            </div>
                        </div>
                    </BottomNavigation>
                    <Divider style={{borderTop:'8px solid #bbb'}}/>

                </div>
                <img className={classes.image_container} src={myImage} alt=""/>

                <div className={classes.title_container}>


                </div>
                <div className={classes.button_container}>
                </div>
            </div>

    );
    }
}

export default withStyles(styleSheet)(Login)