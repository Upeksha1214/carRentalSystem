import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import "../../Home/style.css";
import Modal from 'react-bootstrap/Modal';
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';

import Box from "@material-ui/core/Box";

import ClipLoader from "react-spinners/ClipLoader";

class RentalRequest extends Component{
    constructor(props) {
        super(props);
        this.state={
            show : false,
            selectedValue : '',

            brand : '',
            type : '',
            transmission : '',
            numOfp : '',
            carImage : null,

        }
    }

    handleClose = () =>{
        this.setState({show : false})
    }
    handleShow = () => {
        this.setState({show : true})
    }

    loadData=() =>{
        this.setState({
            brand : this.props.data.carName,
            type : this.props.data.carType,
            transmission : this.props.data.automatic,
            numOfp : this.props.data.numofp,
            carImage : this.props.data.imgUrl,
        })
    }

    /* getCar=async (carId) =>{
         let res = await CarService.getCarById(carId);
         if (res!='ERR_BAD_REQUEST'){
              this.setState({
                  brand : res.data.brand,
                  type : res.data.vehicleType,
                  transmission : res.data.transmissionType,
                  numOfp : res.data.numOfPassenger,
              })
             let response = await CarService.getCarImage(carId,"Side");
              if (response!='ERR_BAD_REQUEST'){
                  this.setState({
                      carImage : URL.createObjectURL(response.data)
                  })
              }
             this.setState({loading : false})
         }

     }*/
    componentDidMount() {
        this.loadData()
    }

    render() {
        const {classes}=this.props
        return (

            <>


                <button className=" w-50 car_item-btn car_btn-rent" style={{color: 'white'}}
                        onClick={() => {
                            this.handleShow()
                        }}
                >Rent Now ..
                </button>

                <Modal
                    size={"lg"}
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        {/*<img src={logo1} alt=""/>*/}
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={classes.mainContainer}>
                            <div className={classes.topContainer}>
                                <div className={classes.contentContainer}>

                                    <div style={{
                                        backgroundImage: "url(" + this.state.carImage + ")",
                                        backgroundSize: 'cover'
                                    }} className={classes.imageContainer}>

                                    </div>

                                    <div className={classes.imageDetailsContainer}>


                                        <div className={classes.textContainers}>
                                            <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                                 fontWeight={300} m={1}>
                                                Car Brand :
                                            </Box>
                                            <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                                 fontWeight={300} m={1}>
                                                {this.state.brand}
                                            </Box>
                                        </div>
                                        <div className={classes.textContainers}>
                                            <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                                 fontWeight={300} m={1}>
                                                Category :
                                            </Box>
                                            <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                                 fontWeight={300} m={1}>
                                                {this.state.type}
                                            </Box>
                                        </div>
                                        <div className={classes.textContainers}>
                                            <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                                 fontWeight={300} m={1}>
                                                Transmission :
                                            </Box>
                                            <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                                 fontWeight={300} m={1}>
                                                {this.state.transmission}
                                            </Box>
                                        </div>
                                        <div className={classes.textContainers}>
                                            <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                                 fontWeight={300} m={1}>
                                                number Of passenger :
                                            </Box>
                                            <Box fontFamily="Monospace" style={{color: 'white'}} fontSize="15px"
                                                 fontWeight={300} m={1}>
                                                {this.state.numOfp}
                                            </Box>

                                        </div>


                                    </div>

                                </div>
                            </div>
                            <div className={classes.bottomContainer}>

                                <div className={classes.pickupAndReturnDateAndTimeContainer}>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="datetime-local"
                                            label="PickUp Date And Time"
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            /* className={classes.textField}*/
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="datetime-local"
                                            label="Return Date And Time"
                                            type="datetime-local"
                                            defaultValue="2017-05-24T10:30"
                                            /* className={classes.textField}*/
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </form>

                                </div>
                                <div className={classes.containerPickUpAndReturnLocation}>
                                    <TextField id="filled-search" label="Type Starting point" variant="filled"/>
                                    <TextField id="filled-search" label="Type End of journey" variant="filled"/>

                                </div>
                                <div className={classes.driverContainer}>
                                    <label htmlFor="">Do you need a driver?</label>

                                    <div className={classes.radioContainer}>
                                        <div className={classes.radioButtonContainer}>
                                            <label htmlFor="">yes</label>
                                            <Radio
                                                value="y"
                                                color="primary"
                                                label={"Yes"}
                                                checked={this.state.selectedValue === 'y'}
                                                onChange={(e) => {
                                                    this.setState({selectedValue: e.target.value})
                                                }}
                                            />
                                        </div>
                                        <div className={classes.radioButtonContainer}>
                                            <label htmlFor="">No</label>
                                            <Radio
                                                value="n"
                                                color="secondary"
                                                checked={this.state.selectedValue === 'n'}
                                                onChange={(e) => {
                                                    this.setState({selectedValue: e.target.value})
                                                }}
                                            />
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                    </Modal.Footer>
                </Modal>

            </>


        );
    }

}
export default withStyles(styleSheet)(RentalRequest)