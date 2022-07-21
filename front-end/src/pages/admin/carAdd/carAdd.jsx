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

        this.state = {
            front: null,
            backImage: null,
            side: null,
            Interior: null,
        }
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
                                    backgroundColor: '#0000A5',
                                    fontSize: '45px',
                                    width: '400px',
                                    height: '64px',
                                    fontFamily: 'sans-serif',
                                }}>Car Adding Form
                                </display4>
                                <display4 style={{
                                    width: '0',
                                    height: '0',
                                    borderTop: '32px solid transparent',
                                    borderLeft: '66px solid #0000A5',
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

                    <div className={classes.main}>

                        <Grid container className={classes.form_background} spacing={3} onAnimationStart={'animate'}>

                            <Grid item>
                                <div style={{width: '100vw', height: '20%'}}></div>
                            </Grid>

                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Car Id"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Brand" variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Type" variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Number of passengers"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Transmission type"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Fuel Type"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic"
                                                   label="Prices for the rent durations" variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic"
                                                   label="Free mileage for the price and duration" variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Price for extra KM"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Registration number"
                                                   variant="outlined"/></Grid>
                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Color" variant="outlined"/></Grid>


                            <Grid item className={classes.imageContainer}>

                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage: "url(" + this.state.front + ")",
                                    backgroundSize: 'cover'
                                }}></div>


                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage: "url(" + this.state.backImage+ ")",
                                    backgroundSize: 'cover'
                                }}></div>


                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage: "url(" + this.state.side  + ")",
                                    backgroundSize: 'cover'
                                }}></div>


                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage: "url(" + this.state.Interior + ")",
                                    backgroundSize: 'cover'
                                }}></div>


                            </Grid>

                            <Grid item className={classes.uploadImageButton}>
                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file01"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            front: URL.createObjectURL(e.target.files[0])
                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file01">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </div>
                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file02"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            backImage: URL.createObjectURL(e.target.files[0])
                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file02">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </div>
                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file03"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            side: URL.createObjectURL(e.target.files[0])
                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file03">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </div>
                                <div><input

                                    style={{display: 'none'}}
                                    accept="image/*"
                                    className={classes.input}
                                    id="contained-button-file04"
                                    multiple
                                    type="file"
                                    onChange={(e) => {
                                        this.setState({
                                            Interior: URL.createObjectURL(e.target.files[0])
                                        })
                                    }}
                                />
                                    <label htmlFor="contained-button-file04">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </div>

                            </Grid>


                            <Grid item>
                                <div style={{width: '100vw', height: '40%'}}></div>
                            </Grid>


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
        );
    }

}

export default withStyles(styleSheet)(CarAdd)
