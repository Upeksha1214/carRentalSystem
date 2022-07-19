import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from "../carAdd/style";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


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
                                }}> Hello
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

                        <div className={classes.form_background}>

                            <div className={classes.form}>

                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                                <TextField style={{width:'500px'}} id="outlined-basic" label="Car Id" variant="outlined"/>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

}

export default withStyles(styleSheet)(CarAdd)