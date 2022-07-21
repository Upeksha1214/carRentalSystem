import React, {Component, Fragment} from "react";
import {styleSheet} from "../../admin/driverAdd/style";
import {withStyles} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";


class DriverAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props
        return(
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
                                }}> Driver Adding Form
                                </display4>
                                <display4 style={{width: '0', height: '0', borderTop: '32px solid transparent', borderLeft: '66px solid #0000A5',
                                    borderBottom: '32px solid transparent'
                                }}></display4>

                                <div style={{position: 'relative', width: '200px'}}></div>
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

                    <div className={classes.driver_main}>

                        <Grid container className={classes.form_background} spacing={3} onAnimationStart={'animate'}>

                            <Grid item><div style={{width : '100vw' , height : '20%'}}></div> </Grid>

                            <Grid item> <TextField id="outlined-basic" label="Driver Id" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Email" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="UserName" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="New Password" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="NIC Number and Photo" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Driving Number and Photo" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="Address" variant="outlined"/></Grid>
                            <Grid item> <TextField id="outlined-basic" label="contact Number" variant="outlined"/></Grid>


                            <Grid item><div style={{width : '100vw' , height : '20%'}}></div> </Grid>
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

                                }}>Add</Button></Grid>

                            <Grid item> <TextField id="outlined-basic" label="Search Id" variant="outlined"/></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}>Search</Button></Grid>

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
                </div>
            </Fragment>
        )
    }
}
export default withStyles(styleSheet)(DriverAdd)