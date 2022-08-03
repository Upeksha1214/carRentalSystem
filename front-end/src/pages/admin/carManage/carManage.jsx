import React, {Component, Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {styleSheet} from ".//style";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import axios from "../../../axios.js";
import Autocomplete from '@material-ui/lab/Autocomplete';
import CarService from "../../../services/CarService";
import ViewAllCarPopUpTable from "../../../compounts/viewAllCarPoupTable";



class CarManage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,
            sideImage: null,
            interiorImage: null,

            frontView: null,
            backView: null,
            sideView: null,
            interiorView: null,


            carDetails: {
                vehicleId : '',
                vehicleType : '',
                brand : '',
                NumOfPassenger : '',
                transmissionType : '',
                fuelType :'',
                dailyPrice :'',
                monthlyPrice :'',
                dailyFreeKm : '',
                monthlyFreeKm : '',
                priceOfExtraKm : '',
                registerNumber : '',
                color : '',
            }
        }
    }

        changeStateCarDetails(vehicleId,vehicleType,brand,NumOfPassenger,transmissionType,fuelType,dailyPrice,
                              monthlyPrice,dailyFreeKm ,monthlyFreeKm ,priceOfExtraKm,
                              registerNumber,color,frontImage,backImage,sideImage,interiorImage){
            this.setState({
                carDetails : {
                    vehicleId :vehicleId,
                    vehicleType : vehicleType,
                    brand : brand,
                    numOfPassenger : NumOfPassenger,
                    transmissionType :transmissionType,
                    fuelType :fuelType,
                    dailyPrice :dailyPrice,
                    monthlyPrice :monthlyPrice,
                    dailyFreeKm : dailyFreeKm ,
                    monthlyFreeKm :monthlyFreeKm ,
                    priceOfExtraKm : priceOfExtraKm,
                    registerNumber : registerNumber,
                    color : color,
                },
                frontView : frontImage,
                backView : backImage,
                sideView : sideImage,
                interiorView : interiorImage,

            })
        }
    addCarImage=async (carId) =>{

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.frontImage);
        bodyFormData.append('param', this.state.backImage);
        bodyFormData.append('param', this.state.sideImage);
        bodyFormData.append('param', this.state.interiorImage);

        let res = await CarService.addCarImage(bodyFormData,carId);
        if (res.data.code===200){alert(res.data.message)}else {
            alert(res.data.message);
        }

    }

    addCar =async () =>{

        var carDetails = {
            vehicleId : this.state.carDetails.vehicleId,
            vehicleType : this.state.carDetails.vehicleType,
            brand  : this.state.carDetails.brand,
            numOfPassenger : this.state.carDetails.numOfPassenger,
            transmissionType : this.state.carDetails.transmissionType,
            fuelType : this.state.carDetails.fuelType,
            dailyPrice : this.state.carDetails.dailyPrice ,
            monthlyPrice : this.state.carDetails.monthlyPrice,
            dailyFreeKm : this.state.carDetails.dailyFreeKm,
            monthlyFreeKm : this.state.carDetails.monthlyFreeKm,
            priceOfExtraKm : this.state.carDetails.priceOfExtraKm,
            registerNumber : this.state.carDetails.registerNumber,
            color : this.state.carDetails.color,
            state : 'Parking'
        }

        let res = await CarService.addCar(carDetails);
        if (res.data.code==200){
            alert(res.data.message);

            this.addCarImage(carDetails.vehicleId);

        }else {
            alert(res.data.message);
        }
    }

    updateCar=async () =>{
        var carUpdateDetails = {
            vehicleId : this.state.carDetails.vehicleId,
            vehicleType : this.state.carDetails.vehicleType,
            brand  : this.state.carDetails.brand,
            numOfPassenger : this.state.carDetails.numOfPassenger,
            transmissionType : this.state.carDetails.transmissionType,
            fuelType : this.state.carDetails.fuelType,
            dailyPrice : this.state.carDetails.dailyPrice ,
            monthlyPrice : this.state.carDetails.monthlyPrice,
            dailyFreeKm : this.state.carDetails.dailyFreeKm,
            monthlyFreeKm : this.state.carDetails.monthlyFreeKm,
            priceOfExtraKm : this.state.carDetails.priceOfExtraKm,
            registerNumber : this.state.carDetails.registerNumber,
            color : this.state.carDetails.color,
            state : 'Parking'
        }

        let res =await CarService.updateCar(carUpdateDetails);
        if (res.status===200){

            let front=this.state.frontImage;
            let back=this.state.backImage;
            let side=this.state.sideImage;
            let interior=this.state.interiorImage;
            let list=[front,back,side,interior]
            let viewList=["Front","Back","Side","Interior"]

            for (var i=0; i<list.length; i++){
                if (list[i] != null){
                    let formData = new FormData();
                    formData.append('carImage',list[i]);
                    await this.updateCarImage(formData, carUpdateDetails.vehicleId, viewList[i]);
                }
            }

            alert('Car Details Update SuccessFull..')
        }else {
            alert("Car update Fail..")
        }
    }

    updateCarImage=async (data,carId,view) =>{
        let response =await CarService.updateCarImage(data,carId,view);
        if (response.status!=200){
            alert("Car Image Update Fail")
        }
    }

    deleteCar=async () =>{

        let res =await CarService.deleteCar(this.state.carDetails.vehicleId);
        if (res.status==200){


            let res =await CarService.deleteCarImages(this.state.carDetails.vehicleId);
            if (res.data.code==200){
                alert("Car Deleted Success")
                this.clearAllState()
            }
        }else {
            alert("Car Delete Fail...")
        }

    }

    clearAllState=() =>{
        this.setState({
            frontImage: null,
            backImage : null,
            sideImage : null,
            interiorImage : null,

            frontView : null,
            backView : null,
            sideView : null,
            interiorView : null,

            carDetails : {
                vehicleId : '',
                vehicleType : '',
                brand : '',
                numOfPassenger : '',
                transmissionType : '',
                fuelType :'',
                dailyPrice :'',
                monthlyPrice :'',
                dailyFreeKm : '',
                monthlyFreeKm : '',
                priceOfExtraKm : '',
                registerNumber : '',
                color : '',
            }

        })
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
                                }}>Car Manage Form
                                </display4>
                                <display4 style={{
                                    width: '0',
                                    height: '0',
                                    borderTop: '32px solid transparent',
                                    borderLeft: '66px solid #0000A5',
                                    borderBottom: '32px solid transparent'
                                }}></display4>

                                <div style={{position: 'relative', width: '50px'}}></div>
                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '115px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Home</Button>

                                <div style={{position: 'relative', width: '10px'}}></div>
                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '250px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Rental Request Manage </Button>

                                <div style={{position: 'relative', width: '10px'}}></div>

                                <Button variant="contained" style={{
                                    backgroundColor: 'white',
                                    width: '180px',
                                    height: '33px',
                                    color: '#000080',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',

                                }}>Driver Manage </Button>

                                <div style={{position: 'relative', width: '10px'}}></div>

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
                                                   variant="outlined"
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   value={this.state.carDetails.vehicleId}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.vehicleId = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>


                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Type" variant="outlined"
                                                   value={this.state.carDetails.vehicleType}
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.vehicleType = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>

                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Brand" variant="outlined"
                                                   value={this.state.carDetails.brand}
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.brand = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>

                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Number of passengers"
                                                   variant="outlined"
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   value={this.state.carDetails.numOfPassenger}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.numOfPassenger = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>

                            <Grid item><TextField
                                        label="Transmission type." variant="outlined"
                                        value={this.state.carDetails.transmissionType}
                                        size={"small"}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={(e) => {
                                            let data = this.state.carDetails
                                            data.transmissionType = e.target.value
                                            this.setState({ data })
                                        }}
                            />

                            </Grid>

                            <Grid item><TextField
                                 size={"small"}
                                  label="Fuel Type." variant="outlined" value={this.state.carDetails.fuelType}

                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                 onChange={(e) => {
                                     let data = this.state.carDetails
                                     data.fuelType = e.target.value
                                     this.setState({ data })
                                 }}
                            />


                            </Grid>
                            <Grid item><TextField size={"small"} id="outlined-basic"
                                                   label="Prices for the rent durations Daily" variant="outlined"
                                                  InputLabelProps={{
                                                      shrink: true,
                                                  }}
                                                  value={this.state.carDetails.dailyPrice}

                                                  onChange={(e) => {
                                                      let data = this.state.carDetails
                                                      data.dailyPrice = e.target.value
                                                      this.setState({ data })
                                                  }}
                            /></Grid>

                            <Grid item> <TextField size={"small"} id="outlined-basic"
                                                   label="Prices for the rent durations Monthly" variant="outlined"
                                                   value={this.state.carDetails.monthlyPrice}
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.monthlyPrice = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>


                            <Grid item> <TextField size={"small"} id="outlined-basic"
                                                   label="Free mileage daily Km" variant="outlined"
                                                   value={this.state.carDetails.dailyFreeKm}
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.dailyFreeKm = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>

                            <Grid item> <TextField size={"small"} id="outlined-basic"
                                                   label="Free mileage monthly Km" variant="outlined"
                                                   value={this.state.carDetails.monthlyFreeKm}
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.monthlyFreeKm = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>

                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Price for extra KM"
                                                   variant="outlined"
                                                   value={this.state.carDetails.priceOfExtraKm}
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.priceOfExtraKm = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>

                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Registration number"
                                                   variant="outlined"
                                                   value={this.state.carDetails.registerNumber}
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.registerNumber = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>

                            <Grid item> <TextField size={"small"} id="outlined-basic" label="Color"
                                                   variant="outlined"
                                                   value={this.state.carDetails.color}
                                                   InputLabelProps={{
                                                       shrink: true,
                                                   }}
                                                   onChange={(e) => {
                                                       let data = this.state.carDetails
                                                       data.color = e.target.value
                                                       this.setState({ data })
                                                   }}
                            /></Grid>


                            <Grid item className={classes.imageContainer}>

                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage:"url(" +this.state.frontView+ ")",
                                    backgroundSize: 'cover'
                                }}></div>


                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage:"url(" +this.state.backView+ ")",
                                    backgroundSize: 'cover'
                                }}></div>


                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage:"url(" +this.state.sideView+ ")",
                                    backgroundSize: 'cover'
                                }}></div>


                                <div className={classes.imageDiv} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '75%',
                                    backgroundImage:"url(" +this.state.interiorView+ ")",
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
                                            frontImage: e.target.files[0],
                                            frontView : URL.createObjectURL(e.target.files[0])
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
                                            backImage: e.target.files[0],
                                            backView : URL.createObjectURL(e.target.files[0])
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
                                            sideImage: e.target.files[0],
                                            sideView : URL.createObjectURL(e.target.files[0])
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
                                            interiorImage: e.target.files[0],
                                            interiorView : URL.createObjectURL(e.target.files[0])
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


                                }}
                                        onClick={async () => {
                                            this.addCar();

                                        }}

                                >Add</Button></Grid>


                            <Grid item> <TextField id="outlined-basic" label="Search Id" variant="outlined"/></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}
                                >Search</Button></Grid>

                            <Grid item>
                                <Button variant="contained" style={{
                                    backgroundColor: 'blue',
                                    width: '120px',
                                    height: '50px',
                                    color: '#3BB9FF',
                                    borderRadius: "15px",
                                    boxShadow: '1px 1px 5px 0.2px',
                                }}
                                        onClick={async () => {
                                            this.updateCar();

                                        }}

                                >Update</Button></Grid>

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
                                }}
                                        onClick={async () => {
                                            this.deleteCar();

                                        }}

                                >Delete</Button>
                            </Grid>
                            <Grid item>
                                <ViewAllCarPopUpTable data={{changeStateCarDetails:this.changeStateCarDetails.bind(this)}}/>
                            </Grid>

                        </Grid>

                    </div>
                    {/*<div className={classes.tableContainer} style={{}}>
                        <div className={classes.tableView}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table" s>
                                    <TableHead style={{backgroundColor:'#98AFC7'}}>
                                        <TableRow style={{}}>
                                            <TableCell>Car Id</TableCell>
                                            <TableCell align="right">Brand</TableCell>
                                            <TableCell align="right">Type</TableCell>
                                            <TableCell align="right">Four images of the car</TableCell>
                                            <TableCell align="right">Number of passengers </TableCell>
                                            <TableCell align="right">Transmission type </TableCell>
                                            <TableCell align="right">Fuel Type</TableCell>
                                            <TableCell align="right">Prices for the rent durations</TableCell>
                                            <TableCell align="right">Free mileage for the price and duration</TableCell>
                                            <TableCell align="right">Price for extra KM</TableCell>
                                            <TableCell align="right">Registration number</TableCell>
                                            <TableCell align="right">Color</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                                <TableCell align="right">{row.fat}</TableCell>
                                                <TableCell align="right">{row.carbs}</TableCell>
                                                <TableCell align="right">{row.protein}</TableCell>
                                                <TableCell align="right">{row.button}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>*/}
                </div>

            </Fragment>
        );
    }

}

export default withStyles(styleSheet)(CarManage)
