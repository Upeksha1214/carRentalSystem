import React, {Component} from 'react';
import BankDetails from '../../../assets/image/bankDetails.jpeg';
import Button from 'react-bootstrap/Button';
import "../../Home/style.css";
import Modal from 'react-bootstrap/Modal';
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
/*import logo1 from '../../../assets/icon/logo.png'*/
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CarService from "../../../services/CarService";
import ClipLoader from "react-spinners/ClipLoader";
import customerService from "../../../services/customerService";
import rentalRequestService from "../../../services/rentalRequestService";
import MuiButton from '@material-ui/core/Button';

class RentalRequest extends Component{
    constructor(props) {
        super(props);
        this.state={
            show : false,
            selectedValue : 'y',
            carRentFormDisplay : 'block',
            paymentFormDisplay : 'none',
            nextStepButtonDisplay : 'block',
            requestButtonDisplay : 'none',


            brand : '',
            type : '',
            transmission : '',
            numOfp : '',
            carImage : null,

            damageSlipImage : null,
            damageSlipImageView: null,

        }
    }

    clearAllState=() =>{
        this.setState({
            show : false,
            selectedValue : 'y',
            carRentFormDisplay : 'block',
            paymentFormDisplay : 'none',
            nextStepButtonDisplay : 'block',
            requestButtonDisplay : 'none',


            brand : '',
            type : '',
            transmission : '',
            numOfp : '',
            carImage : null,

            damageSlipImage : '',
            damageSlipImageView : '',

            pickupDateAndTime : '',
            returnDateAndTime : '',
            startPoint : '',
            endPoint : '',


        })
    }


   handleClose = () =>{
       this.setState({show : false}
       )
       this.clearAllState()
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

    checkCustomerLicense=async (customerId) =>{
        let response =await customerService.checkLicenseByCustomer(customerId);
        if(response.code!='ERR_BAD_REQUEST'){
            this.setState({
                carRentFormDisplay: 'none',
                paymentFormDisplay: 'block'
            })
        }else {
            alert("customer Licence not Found")
        }

        }

        sendRentalRequest=async () =>{

              let damageSlip = new FormData();
            damageSlip.append('param',this.state.damageSlipImage)
            let resToken = await rentalRequestService.uploadDamageSlip(this.props.data.customerId,damageSlip);
            if (resToken.code!='ERR_BAD_REQUEST'){
                if (resToken.status==200){
                    var sendRequestData={
                        customerId : 'C-001',
                        vehicleId  : this.props.data.carId,
                        pickupDateAndTime : this.state.pickupDateAndTime,
                        returnDateAndTime : this.state.returnDateAndTime,
                        startPoint : this.state.startPoint,
                        endPoint : this.state.endPoint,
                        damageSlip : resToken.data.data
                    }

                    let response = await rentalRequestService.sendRentalRequest(sendRequestData);
              if (response.code!='ERR_BAD_REQUEST'){
                   if (response.status==200){
                       alert("Request send success..!");
                       this.handleClose()
                   }

              }else {alert("Request send Fail.")}

                }
            }



        }

    render() {
        const {classes}=this.props
        return (
                  <>
                    <button disabled={this.props.btn} className=" w-50 car__item-btn car__btn-rent" style={{color : 'white'}}
                            onClick={() =>{
                                this.loadData()
                                this.handleShow()
                            }}
                    >Rent Now .. </button>

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

                                <div style={{
                                    display : this.state.carRentFormDisplay
                                    }} className={classes.rentCarForm}>
                                    <div className={classes.topContainer}>
                                        <div className={classes.contentContainer}>

                                            <div style={{
                                                backgroundImage:"url(" +this.state.carImage+ ")",
                                                backgroundSize: 'cover'
                                            }} className={classes.imageContainer}>

                                            </div>

                                            <div className={classes.imageDetailsContainer}>


                                                <div className={classes.textContainers}>
                                                    <Box fontFamily="Monospace" style={{color : 'white'}} fontSize="15px" fontWeight={300} m={1}>
                                                        Car Brand :
                                                    </Box>
                                                    <Box fontFamily="Monospace" style={{color : 'white'}} fontSize="15px" fontWeight={300} m={1}>
                                                        {this.state.brand}
                                                    </Box>
                                                </div>
                                                <div className={classes.textContainers}>
                                                    <Box fontFamily="Monospace" style={{color : 'white'}} fontSize="15px" fontWeight={300} m={1}>
                                                        Category :
                                                    </Box>
                                                    <Box fontFamily="Monospace" style={{color : 'white'}} fontSize="15px" fontWeight={300} m={1}>
                                                        {this.state.type}
                                                    </Box>
                                                </div>
                                                <div className={classes.textContainers}>
                                                    <Box fontFamily="Monospace" style={{color : 'white'}} fontSize="15px" fontWeight={300} m={1}>
                                                        Transmission :
                                                    </Box>
                                                    <Box fontFamily="Monospace" style={{color : 'white'}} fontSize="15px" fontWeight={300} m={1}>
                                                        {this.state.transmission}
                                                    </Box>
                                                </div>
                                                <div className={classes.textContainers}>
                                                    <Box fontFamily="Monospace" style={{color : 'white'}} fontSize="15px" fontWeight={300} m={1}>
                                                        number Of passenger :
                                                    </Box>
                                                    <Box fontFamily="Monospace" style={{color : 'white'}} fontSize="15px" fontWeight={300} m={1}>
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
                                                    onChange={(e) =>{
                                                        this.setState({
                                                            pickupDateAndTime : e.target.value
                                                        })

                                                    }}
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
                                                    onChange={(e) =>{
                                                        this.setState({
                                                            returnDateAndTime : e.target.value
                                                        })

                                                    }}
                                                    /* className={classes.textField}*/
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </form>

                                        </div>
                                        <div className={classes.containerPickUpAndReturnLocation}>
                                            <TextField id="filled-search" label="Type Starting point" onChange={(e) =>{this.setState({startPoint : e.target.value})}}  variant="filled" />
                                            <TextField id="filled-search" label="Type End of journey" onChange={(e) =>{this.setState({endPoint : e.target.value})}} variant="filled" />

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
                                                        checked={this.state.selectedValue==='y'}
                                                        onChange={(e) =>{
                                                            this.setState( {selectedValue : e.target.value})
                                                        }}
                                                    />
                                                </div>
                                                <div className={classes.radioButtonContainer}>
                                                    <label htmlFor="">No</label>
                                                    <Radio
                                                        value="n"
                                                        color="secondary"
                                                        checked={this.state.selectedValue==='n'}
                                                        onChange={(e) =>{
                                                            this.setState( {selectedValue : e.target.value})
                                                        }}
                                                    />
                                                </div>
                                            </div>




                                        </div>

                                    </div>
                                </div>


                                <div style={{display : this.state.paymentFormDisplay}} className={classes.PaymentFormContainer}>


                                    <div className={classes.paymentContainer}>
                                        <div className={classes.leftContainerF}>
                                                <div className={classes.damageSlipImageContainer}>

                                                    <div
                                                        style={{
                                                               backgroundImage:"url(" +this.state.damageSlipImageView+ ")",
                                                                backgroundSize: 'cover'
                                                        }}
                                                        className={classes.damageSlipImage}> </div>

                                                    <div className={classes.browsButton}>
                                                        <input
                                                            hidden={true}
                                                            accept="image/*"
                                                            className={classes.input}
                                                            id="contained-button-file"
                                                            multiple
                                                            type="file"
                                                            onChange={(e) =>{
                                                                this.setState({
                                                                    damageSlipImage: e.target.files[0],
                                                                    damageSlipImageView : URL.createObjectURL(e.target.files[0])

                                                                })
                                                            }}
                                                        />
                                                        <label htmlFor="contained-button-file">
                                                            <MuiButton style={{width : '200px'}} variant="contained" color="secondary" component="span"
                                                            >
                                                                Upload
                                                            </MuiButton>
                                                        </label>
                                                    </div>


                                                </div>
                                        </div>

                                        <div className={classes.rightContainerF}>

                                          <div className={classes.bankDetailsContainer}>
                                              <img src={BankDetails} className={classes.bankDetailsImage} alt=""/>
                                            {/*  <div className={classes.bankDetailsImage}></div>*/}


                                            <div className={classes.paragraphBankDetails}>
                                                <Typography style={{ }}  variant="subtitle1" gutterBottom>
                                                    <b>
                                                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                                    dignissimos laborum fugiat deleniti?
                                                    </b>
                                                </Typography>

                                            </div>

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

                            {/*next Button*/}
                            <Button variant="primary"
                                    style={{display : this.state.nextStepButtonDisplay}}
                                    onClick={() =>{
                                        if (this.state.selectedValue=='n'){
                                            this.checkCustomerLicense('C-001')
                                        }else {
                                            this.setState({
                                                carRentFormDisplay: 'none',
                                                nextStepButtonDisplay : 'none',
                                                paymentFormDisplay: 'block',
                                                requestButtonDisplay : 'block'
                                            })
                                        }
                                    }}
                            >Go to Next Step</Button>

                            <Button variant="primary"
                                    style={{display : this.state.requestButtonDisplay}}
                                    onClick={() =>{
                                          this.sendRentalRequest()
                                    }}
                            >Request Send</Button>
                        </Modal.Footer>
                    </Modal>

        </>

        );
    }

}
export default withStyles(styleSheet)(RentalRequest)

