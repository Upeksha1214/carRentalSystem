import React, {Component, useState} from 'react';
import Button from 'react-bootstrap/Button';
import ReactButton from "@material-ui/core/Button";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import {RiAddCircleFill} from "react-icons/ri";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import AlertDialog from "../../compounts/customer/alrtDialog";
/*import TextField from '@material-ui/core/TextField';*/
import TextField from '@mui/material/TextField';
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete"
import customerService from "../../services/customerService";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import CustomerService from "../../services/customerService";




class RegisterCustomer extends Component{
    constructor(props) {
        super(props);

        this.state={
            show : false,
            createAccDisplay : 'block',
            customerDetailsDisplay : 'none',
            imageVerifyDisplay : 'none',
            btn1Display : 'block',
            btn2Display : 'none',
            btn3Display : 'none',

            FrontImage : null,
            BackImage : null,
            FrontView : null,
            BackView : null,

            id : '',
            email : '',
            nic : '',
            drivingLicence : '',
            address : '',
            contactNum : '',
            userName : '',
            password : '',
            retypePassword : '',




            TextLabel : 'LICENCE OR NIC NUMBER',
            showLogin : false,

            textFieldColor : 'white',
            textNICOrLicenceState : true,
            NICOrLicenceValue : '',
            cmbState : 'Upload front Image & back Image NIC Or Driving Licence',

            registerSnackBar : false,


            validateState : {
                UserNameError : false,
                UserNameMessage : '',
                passwordError : '',
                retypePasswordColor:'error',
                passwordMessage : '',
                nextButtonUserAccount : true,
                nextButtonCustomerDetail : true,
                register : true,

                emailError : false,
                emailErrorMessage : '',
                licenseOrNicError : false,
                licenseOrNicErrorMessage : '',
                addressError : false,
                addressErrorMessage : '',
                contactError : false,
                contactErrorMessage : '',

             },

        }

    }

    registerCustomer = async () => {

        var customerDetails = {
            id: this.state.id,
            email: this.state.email,
            nic: this.state.nic,
            drivingLicence: this.state.drivingLicence,
            address: this.state.address,
            contactNumber: this.state.contactNum,
            username: this.state.userName,
            password: this.state.password,

        }


        let res = await CustomerService.addCustomer(customerDetails);

        if (res.code != 'ERR_BAD_REQUEST') {
            alert(res.data.message);
            switch (this.state.cmbState) {

                case "Upload front Image & back Image Driving Licence":

                    let licenceImages = new FormData();
                    licenceImages.append('Licence',this.state.FrontImage)
                    licenceImages.append('Licence',this.state.BackImage)
                    let res = await CustomerService.uploadImageCustomerDrivingLicence(licenceImages, this.state.id);
                    if (res.code !='ERR_BAD_REQUEST'){alert(res.data.message)};break;

                case "Upload front Image & back Image NIC":
                    let nicImage = new FormData();
                    nicImage.append('NIC',this.state.FrontImage)
                    nicImage.append('NIC',this.state.BackImage)
                    let response = await CustomerService.uploadImageCustomerNIC(nicImage, this.state.id);
                    if (response.code !='ERR_BAD_REQUEST'){
                        alert(response.data.message);
                    };break;

                default : alert("please Select Upload Images Type")
            }

        } else {
            alert(res.response.data.message);
        }
    }


   clearAllState=() =>{

        this.setState({
            FrontImage : null,
            BackImage  : null,
            FrontView  :null,
            BackView : null,
            id : '',
            email : '',
            nic : '',
            drivingLicence : '',
            address : '',
            contactNum : '',
            userName : '',
            password : '',
            TextLabel : 'LICENCE OR NIC NUMBER',
            textNICOrLicenceState : true,
        })



    }

    handleClose = () =>{
        this.setState({show : false})
    }
    handleShow = () => {
        this.setState({show : true})
    }

    hadleForm=() =>{
        this.setState({
            createAccDisplay : 'block',
            customerDetailsDisplay : 'none',
            imageVerifyDisplay : 'none',
            setBtn2Display : 'none',
            setBtn1Display :'block',

        })
        this.clearAllState()
    }

    validationUserAccountForm=() =>{
        var userName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
        var password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

        if (userName.test(this.state.userName)) {
            this.setState({validateState :{UserNameError : false , userNameMessage :''}})
                if (password.test(this.state.password)){
                    this.setState({validateState :{passwordError : false , passwordMessage : '' , nextButtonUserAccount : true}})
                    if(this.state.password===this.state.retypePassword) {
                        this.setState({validateState: {nextButtonUserAccount: false , retypePasswordColor : 'success'}})
                    }else { this.setState({validateState: {retypePasswordColor : 'error', nextButtonUserAccount : true}})}

                }else {
                    this.setState({validateState :{passwordError : true , passwordMessage : 'Password Invalid' , nextButtonUserAccount : true}})
                }
        }else { this.setState({validateState :{ userNameError : true , userNameMessage : 'UserName InValid' , nextButtonUserAccount : true}})}
    }

    validationCustomerDetailsForm=() =>{
          var email=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
          var licence=/^[B][0-9]{7}$/;
          var nic=/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
          var address=/^[#.0-9a-zA-Z\s,-]+$/;
          var contact=/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;

          this.setState({validateState : {nextButtonCustomerDetail : true}})
          if (email.test(this.state.email)){
                this.setState({validateState : {emailError : false, emailErrorMessage : '' }})
                if (licence.test(this.state.drivingLicence) ||  nic.test(this.state.nic)){
                    this.setState({validateState : {licenseOrNicError : false, licenseOrNicErrorMessage : ''}})
                      if (address.test(this.state.address)){
                          this.setState({validateState : {addressError : false, addressErrorMessage : ''}})
                          if (contact.test(this.state.contactNum)){
                              this.setState({validateState : {contactError : false, contactErrorMessage : '' ,nextButtonCustomerDetails:false}})
                          }else {
                              this.setState({validateState : {contactError : true, contactErrorMessage : 'Invalid Contact Number', nextButtonCustomerDetail : true}})
                          }
                      }else {
                          this.setState({validateState : {addressError : true, addressErrorMessage : 'Invalid Address', nextButtonCustomerDetail : true}})
                      }
                }else {
                    this.setState({validateState : {licenseOrNicError : true, licenseOrNicErrorMessage : 'Invalid Licence Num Or Nic Number', nextButtonCustomerDetail : true}})
                }
          }else {this.setState({validateState : {emailError : true, emailErrorMessage : 'Invalid Imail' , nextButtonCustomerDetail : true}})}

    }

    validationImageVerifyForm=() =>{
        if (this.state.cmbState=="Upload front Image & back Image NIC" || this.state.cmbState=="Upload front Image & back Image Driving Licence"){
            if (this.state.FrontView!=null && this.state.BackView!=null){
               this.setState({validateState : {register : false}})
            }else {
                this.setState({validateState : {register : true}})
            }
        }else {
            this.setState({validateState : {register : true}})
        }
    }



    render() {
        const {classes} = this.props;
        return(
            <>
                <ReactButton
                    startIcon={<RiAddCircleFill/>}
                    style={{color: '#889988', TbPower :{color: '#898'}, flexShrink:1}}
                    onClick={async () =>{
                       let res = await CustomerService.genarateNewCustomerId();
                        if (res.code != 'ERR_BAD_REQUEST') {
                            let newId=res.data.data;
                            this.setState({ id : newId})
                            this.handleShow()
                        } else {
                            alert(res.response.data.message);
                        }
                    }}
                >Register</ReactButton>


                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                    style={{boxShadow : '10px 10px 10px 10px',}}
                >
                    <Modal.Header >
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div  className={classes.registerContainer}>
                            {/*create user Account Form*/}
                            <div style={{display : this.state.createAccDisplay}} className={classes.createUserAccountContainer}>
                                <div className={classes.userHeaderContainer}>
                                </div>
                                <div className={classes.textFieldContainer}>
                                    <div style={{ width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                        {/*<Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            USER NAME
                                        </Box>*/}

                                        <TextField
                                            color="success"
                                            onChange={(e) => {
                                                this.state.userName=e.target.value
                                                this.validationUserAccountForm()
                                            }}
                                            error={this.state.validateState.userNameError}
                                            className={classes.margin}
                                            placeholder={"Enter the UserName"}
                                            size={'small'}
                                            id="filled-error"
                                            label={this.state.validateState.userNameMessage}
                                            variant="filled"
                                            id="validation-outlined-input"
                                            helperText={"Minimum 8 characters,at least one letter and one number"}
                                        />
                                    </div>

                                    <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            PASSWORD
                                        </Box>


                                        <TextField
                                            color="success"
                                            onChange={(e) => {
                                                this.state.password=e.target.value
                                                this.validationUserAccountForm()

                                            }}
                                            error={this.state.validateState.passwordError}
                                            className={classes.margin}
                                            placeholder={"Enter the PassWord"}
                                            label={this.state.validateState.passwordMessage}
                                            size={'small'}
                                            variant="filled"
                                            id="validation-outlined-input"
                                            helperText={"Minimum 8 characters,at least one letter and one number"}
                                        />
                                    </div>

                                    <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            RE ENTER PASSWORD
                                        </Box>
                                        <TextField
                                            style={{
                                                backgroundColor: this.state.textFieldColor ,
                                            }}
                                            onChange={(e) => {
                                                this.state.retypePassword=e.target.value
                                               this.validationUserAccountForm()
                                                console.log(this.state.retypePassword)
                                            }}
                                            color={this.state.validateState.retypePasswordColor}
                                            className={classes.margin}
                                            placeholder={"Re Enter password"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>




                                </div>




                            </div>


                            {/*Customer Details Form*/}
                            <div style={{display : this.state.customerDetailsDisplay}} className={classes.createUserAccountContainer}>

                                <div className={classes.textFieldContainerCustomerDetails}>

                                    <div style={{ width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            Email
                                        </Box>
                                        <TextField
                                            onChange={(e) => {
                                                this.state.email=e.target.value
                                                this.validationCustomerDetailsForm()
                                            }}
                                            color="success"
                                            error={this.state.validateState.emailError}
                                            style={{width : '97.5%'}}
                                            className={classes.margin}
                                            placeholder={"Enter the Email"}
                                            label={this.state.validateState.emailErrorMessage}
                                            size={'small'}
                                            variant="filled"
                                            id="validation-outlined-input"
                                        />
                                    </div>

                                    <div style={{width : '100%' , height : '120px' , display : 'flex', flexDirection :'row' ,justifyContent : 'space-evenly'}}>

                                        <div style={{width : '50%' , height : '100%' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-around' }}>
                                            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                                {this.state.TextLabel}
                                            </Box>
                                            <TextField
                                                value={this.state.NICOrLicenceValue}
                                                disabled={this.state.textNICOrLicenceState}
                                                onChange={(e) => {
                                                    switch (this.state.TextLabel) {
                                                        case "ENTER NIC NUMBER" :
                                                            this.state.nic=e.target.value
                                                            this.state.NICOrLicenceValue=e.target.value
                                                            this.validationCustomerDetailsForm();break;

                                                        case  "ENTER Driving Licence" :
                                                             this.state.drivingLicence=e.target.value;
                                                             this.state.NICOrLicenceValue=e.target.value;
                                                            this.validationCustomerDetailsForm();break;
                                                    }
                                                }}
                                                color="success"
                                                error={this.state.validateState.licenseOrNicError}
                                                style={{width: '93%'}}
                                                className={classes.margin}
                                                label={this.state.validateState.licenseOrNicErrorMessage}
                                                placeholder={"Enter"}
                                                size={'small'}
                                                variant="filled"
                                                id="validation-outlined-input"
                                            />
                                        </div>

                                        <div style={{width : '50%' , height : '100%' , display : 'flex', flexDirection :'column',justifyContent : 'space-around'}}>
                                            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                                SELECT ONE
                                            </Box>
                                            <Autocomplete
                                                size={'small'}
                                                id="combo-box-demo"
                                                options={[{title: 'Driving Licence'}, {title: 'NIC Number'}]}
                                                getOptionLabel={(option) => option.title}
                                                style={{width: 200}}
                                                renderInput={(params) => <TextField {...params}  variant="filled"/>}
                                                onChange={(event, value) => {
                                                    switch (value.title) {
                                                        case "NIC Number" :
                                                            this.setState({
                                                                NICOrLicenceValue : '',
                                                                textNICOrLicenceState : false,
                                                                DrivingLicence : '',
                                                                TextLabel : 'ENTER NIC NUMBER',
                                                            });break;
                                                        case  "Driving Licence" :
                                                            this.setState({
                                                                NICOrLicenceValue : '',
                                                                textNICOrLicenceState : false,
                                                                nic : '',
                                                                TextLabel : 'ENTER Driving Licence',
                                                            })
                                                            ;break
                                                        default : this.setState({TextNICOrLicenceState : true})
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            ENTER THE ADDRESS
                                        </Box>
                                        <TextField
                                            onChange={(e) => {
                                                this.state.address=e.target.value
                                                this.validationCustomerDetailsForm();
                                            }}
                                            color="success"
                                            error={this.state.validateState.addressError}
                                            label={this.state.validateState.addressErrorMessage}
                                            style={{width : '97.5%'}}
                                            className={classes.margin}
                                            placeholder={"address"}
                                            size={'small'}
                                            variant="filled"
                                            id="validation-outlined-input"
                                        />
                                    </div>
                                    <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            ENTER THE CONTACT NUMBER
                                        </Box>
                                        <TextField
                                            onChange={(e) => {
                                                this.state.contactNum=e.target.value
                                                this.validationCustomerDetailsForm();
                                            }}
                                            color="success"
                                            error={this.state.validateState.contactError}
                                            label={this.state.validateState.contactErrorMessage}
                                            style={{width : '97.5%'}}
                                            className={classes.margin}
                                            placeholder={"contact Number"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>
                                </div>


                            </div>

                            {/*Image Verification Form*/}
                            <div style={{display : this.state.imageVerifyDisplay , }}  className={classes.createUserAccountContainer}>
                                <div className={classes.textContainer}>

                                    <Box fontWeight="fontWeightMedium" m={1}>
                                        {this.state.cmbState}
                                    </Box>

                                </div>

                                <div className={classes.comboBoxContainer}>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        size={'small'}
                                        options={[{title: 'Driving Licence'}, {title: 'NIC Number'}]}
                                        getOptionLabel={(option) => option.title}
                                        style={{width: 300}}
                                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                                        onChange={(event, value) => {
                                            switch (value.title) {
                                                case "NIC Number" :
                                                   this.setState({cmbState : "Upload front Image & back Image NIC"}) ;break;

                                                case  "Driving Licence" :
                                                    this.setState({cmbState : "Upload front Image & back Image Driving Licence"});break;

                                            }
                                            this.validationImageVerifyForm();
                                        }}
                                    />

                                </div>

                                <Divider/>


                                <div  className={classes.ImageVerifyContainer}>

                                    <div className={classes.imageNameContainer}>

                                        <Typography variant="h6">Front Image</Typography>
                                        <Typography variant="h6">Back Image</Typography>

                                    </div>


                                    <div className={classes.imageCover}>


                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow : '5px 5px 10px 1.5px',
                                            height: '85%',
                                            width: '48%',
                                            backgroundImage: "url(" +this.state.FrontView + ")",
                                            backgroundSize: 'cover'
                                        }}>

                                        </div>

                                        <div  style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow : '5px 5px 10px 1.5px',
                                            height: '85%',
                                            width: '48%',
                                            backgroundImage: "url(" + this.state.BackView + ")",
                                            backgroundSize: 'cover'
                                        }}>

                                        </div>


                                    </div>

                                    <div className={classes.browsButtonContainer}>
                                        <input
                                            style={{ display: 'none'}}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                            onChange={(e) =>{
                                                this.state.FrontImage=e.target.files[0]
                                                this.state.FrontView=URL.createObjectURL(e.target.files[0])
                                                this.validationImageVerifyForm();
                                            }}
                                        />
                                        <label htmlFor="contained-button-file">
                                            <ReactButton variant="contained" color="primary" component="span"
                                            >

                                                Browse
                                            </ReactButton>
                                        </label>

                                        <input
                                            style={{ display: 'none'}}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file1"
                                            multiple
                                            type="file"
                                            onChange={(e) =>{
                                                this.state.BackImage = e.target.files[0]
                                                this.state.BackView = URL.createObjectURL(e.target.files[0])
                                                this.validationImageVerifyForm();
                                            }}
                                        />
                                        <label htmlFor="contained-button-file1">
                                            <ReactButton variant="contained" color="primary" component="span"
                                            >
                                                Browse
                                            </ReactButton>
                                        </label>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <AlertDialog data={{setStateRegisterForm : this.handleClose.bind(),setCreateAccHide : this.hadleForm.bind()}}/>

                        {/*1st Step Next Button*/}
                        <Button style={{display : this.state.btn1Display}} variant="primary"
                                disabled={this.state.validateState.nextButtonUserAccount}
                                onClick={async () =>{
                                    if (this.state.userName!=''){
                                        let res = await customerService.ifExistCustomerUserAccount(this.state.userName);
                                        if (res.code != 'ERR_BAD_REQUEST') {
                                            alert(res.data.message);
                                            this.setState({
                                                createAccDisplay : 'none',
                                                customerDetailsDisplay : 'block',
                                                btn1Display : 'none',
                                                btn2Display : 'block',
                                                validateState : {nextButtonCustomerDetail : true}
                                            })
                                        } else {
                                            this.setState({validateState :{ userNameError : true , userNameMessage : res.response.data.message}})
                                        }
                                    }else {
                                        alert("TextField Empty")
                                    }
                                }}
                        >Next Step</Button>

                        {/*second step Next Button*/}
                        <Button  style={{display : this.state.btn2Display}}  variant="primary"
                                 disabled={this.state.validateState.nextButtonCustomerDetail}
                                onClick={async () =>{
                                    let res = await customerService.ifExistEmail(this.state.email);
                                    if (this.state.email!=''){
                                        if (res.code != 'ERR_BAD_REQUEST') {
                                            alert(res.data.message);
                                            this.setState({
                                                createAccDisplay :'none',
                                                customerDetailsDisplay : 'none',
                                            imageVerifyDisplay : 'block',
                                            btn1Display : 'none',
                                            btn2Display : 'none',
                                            btn3Display : 'block',
                                                validateState : {register : true}
                                            })
                                        } else {
                                            this.setState({validateState : {emailErrorMessage : 'Email Allready Exist..!' , emailError : true}})
                                        }
                                    }
                                }}
                        >Next Step</Button>

                        {/*register Button*/}
                        <Button style={{display : this.state.btn3Display}}  variant="primary"
                                disabled={this.state.validateState.register}
                                onClick={async () =>{
                                   this.setState({
                                       createAccDisplay : 'none',
                                       customerDetailsDisplay : 'none',
                                       imageVerifyDisplay : 'none',
                                       btn1Display : 'none',
                                       btn2Display : 'none',
                                       btn3Display : 'none'
                                   })
                                    await this.registerCustomer()

                                     //show login component
                                    /* this.props.data.hadleLogin();*/

                                    this.setState({
                                        show : false
                                    })
                                }}
                        >Register</Button>

                                </Modal.Footer>
                                </Modal>
                                </>
                    )
    }

}

export default withStyles(styleSheet)(RegisterCustomer)
