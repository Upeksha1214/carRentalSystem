import React, {Component, useState} from 'react';
import Button from 'react-bootstrap/Button';
import ReactButton from "@material-ui/core/Button";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.css';
import {RiAddCircleFill} from "react-icons/ri";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import AlertDialog from "../../compounts/customer/alrtDialog/index";
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import Autocomplete from "@material-ui/lab/Autocomplete"
import customerService from "../../services/customerService";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import CustomerService from "../../services/customerService";



class RegisterCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            createAccDisplay: 'block',
            customerDetailsDisplay: 'none',
            imageVerifyDisplay: 'none',
            btn1Display: 'block',
            btn2Display: 'none',
            btn3Display: 'none',

            FrontImage: null,
            BackImage: null,
            FrontView: null,
            BackView: null,


            id: '',
            email: '',
            nic: '',
            drivingLicence: '',
            address: '',
            contactNum: '',
            userName: '',
            password: '',


            TextLabel: 'LICENCE OR NIC NUMBER',
            showLogin: false,

            textFieldColor: 'white',
            textNICOrLicenceState: true,
            NICOrLicenceValue: '',
            cmbState: 'Upload front Image & back Image NIC Or Driving Licence',

            registerSnackBar: false
        }

    }

    registerCustomer = async () => {

        alert("register ok");

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
                    licenceImages.append('Licence', this.state.FrontImage)
                    licenceImages.append('Licence', this.state.BackImage)
                    let res = await CustomerService.uploadImageCustomerDrivingLicence(licenceImages, this.state.id);
                    if (res.code != 'ERR_BAD_REQUEST') {
                        alert(res.data.message)
                    }
                    ;
                    break;

                case "Upload front Image & back Image NIC":
                    let nicImage = new FormData();
                    nicImage.append('NIC', this.state.FrontImage)
                    nicImage.append('NIC', this.state.BackImage)
                    let response = await CustomerService.uploadImageCustomerNIC(nicImage, this.state.id);
                    if (response.code != 'ERR_BAD_REQUEST') {
                        alert(response.data.message);
                    }
                    ;
                    break;

                default :
                    alert("please Select Upload Images Type")
            }

        } else {
            alert(res.response.data.message);
        }
    }


    clearAllState = () => {

        this.setState({
            FrontImage: null,
            BackImage: null,
            FrontView: null,
            BackView: null,
            id: '',
            email: '',
            nic: '',
            drivingLicence: '',
            address: '',
            contactNum: '',
            userName: '',
            password: '',
            TextLabel: 'LICENCE OR NIC NUMBER',
            textNICOrLicenceState: true,
        })


    }

    handleClose = () => {
        this.setState({show: false})
    }
    handleShow = () => {
        this.setState({show: true})
    }

    hadleForm = () => {
        this.setState({
            createAccDisplay: 'block',
            customerDetailsDisplay: 'none',
            imageVerifyDisplay: 'none',
            setBtn2Display: 'none',
            setBtn1Display: 'block',

        })
        this.clearAllState()
    }


    render() {
        const {classes} = this.props;
        return (
            <>
                <ReactButton
                    startIcon={<RiAddCircleFill/>}
                    style={{color: '#889988', TbPower: {color: '#898'}, flexShrink: 1}}
                    onClick={async () => {
                        let res = await CustomerService.genarateNewCustomerId();
                        if (res.code != 'ERR_BAD_REQUEST') {
                            let newId = res.data.data;
                            alert(newId)
                            this.setState({id: newId})
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
                    style={{

                        boxShadow: '10px 10px 10px 10px',
                    }}
                >
                    <Modal.Header>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className={classes.registerContainer}>

                            <div style={{display: this.state.createAccDisplay}}
                                 className={classes.createUserAccountContainer}>


                                <div className={classes.userHeaderContainer}></div>


                                <div className={classes.textFieldContainer}>


                                    <div style={{
                                        width: '100%',
                                        height: '100px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly'
                                    }}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            USER NAME
                                        </Box>
                                        <TextField
                                            onChange={(e) => {
                                                let data = e.target.value
                                                this.setState({
                                                    userName: data
                                                })
                                            }}

                                            className={classes.margin}
                                            placeholder={"Enter the UserName"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>

                                    <div style={{
                                        width: '100%',
                                        height: '100px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly'
                                    }}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            PASSWORD
                                        </Box>
                                        <TextField
                                            onChange={(e) => {
                                                let data = e.target.value
                                                this.setState({
                                                    password: data,
                                                })
                                            }}

                                            className={classes.margin}
                                            placeholder={"Enter the password"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>

                                    <div style={{
                                        width: '100%',
                                        height: '100px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-evenly'
                                    }}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            RE ENTER PASSWORD
                                        </Box>
                                        <TextField
                                            style={{
                                                backgroundColor: this.state.textFieldColor,
                                            }}
                                            onChange={(e) => {
                                                if (e.target.value == this.state.password) {
                                                    this.setState({
                                                        textFieldColor: 'green'
                                                    })

                                                }
                                            }}

                                            className={classes.margin}
                                            placeholder={"Re Enter password"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>


                                </div>


                            </div>

                            <div style={{display: this.state.customerDetailsDisplay}}
                                 className={classes.createUserAccountContainer}>

                                <div className={classes.textFieldContainerCustomerDetails}>


                                    <div style={{
                                        width: '100%',
                                        height: '100px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            Email
                                        </Box>
                                        <TextField
                                            onChange={(e) => {
                                                let data = e.target.value
                                                this.setState({
                                                    email: data
                                                })

                                            }}
                                            style={{width: '97.5%'}}
                                            className={classes.margin}
                                            placeholder={"Enter the Email"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>

                                    <div style={{
                                        width: '100%',
                                        height: '120px',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-evenly'
                                    }}>

                                        <div style={{
                                            width: '50%',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-around'
                                        }}>
                                            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                                {this.state.TextLabel}
                                            </Box>
                                            <TextField
                                                value={this.state.NICOrLicenceValue}
                                                disabled={this.state.textNICOrLicenceState}
                                                onChange={(e) => {
                                                    let data = e.target.value


                                                    switch (this.state.TextLabel) {

                                                        case "ENTER NIC NUMBER" :
                                                            let data1 = e.target.value
                                                            this.setState({nic: data1, NICOrLicenceValue: data});
                                                            break;

                                                        case  "ENTER Driving Licence" :
                                                            let data2 = e.target.value
                                                            this.setState({
                                                                drivingLicence: data2,
                                                                NICOrLicenceValue: data
                                                            });
                                                            break;
                                                    }


                                                    /*  if (this.state.TextLabel=='ENTER NIC NUMBER'){
                                                          this.setState({
                                                              NICOrLicenceValue : data,
                                                              DrivingLicence : '',
                                                              nic : data
                                                          })
                                                      }else if(this.state.TextLabel=='ENTER Driving Licence'){
                                                          this.setState({
                                                              NICOrLicenceValue : data,
                                                              nic : '',
                                                              DrivingLicence : data,
                                                          })

                                                      }*/
                                                }}
                                                style={{width: '93%'}}
                                                className={classes.margin}
                                                placeholder={"Enter"}
                                                size={'small'}
                                                variant="outlined"
                                                id="validation-outlined-input"
                                            />
                                        </div>

                                        <div style={{
                                            width: '50%',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-around'
                                        }}>
                                            <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                                SELECT ONE
                                            </Box>
                                            <Autocomplete
                                                size={'small'}
                                                id="combo-box-demo"
                                                options={[{title: 'Driving Licence'}, {title: 'NIC Number'}]}
                                                getOptionLabel={(option) => option.title}
                                                style={{width: 200}}
                                                renderInput={(params) => <TextField {...params} variant="outlined"/>}
                                                onChange={(event, value) => {
                                                    switch (value.title) {
                                                        case "NIC Number" :

                                                            this.setState({
                                                                NICOrLicenceValue: '',
                                                                textNICOrLicenceState: false,
                                                                DrivingLicence: '',
                                                                TextLabel: 'ENTER NIC NUMBER',
                                                            })
                                                            ;
                                                            break;


                                                        case  "Driving Licence" :
                                                            this.setState({
                                                                NICOrLicenceValue: '',
                                                                textNICOrLicenceState: false,
                                                                nic: '',
                                                                TextLabel: 'ENTER Driving Licence',
                                                            })
                                                            ;
                                                            break

                                                        default :
                                                            this.setState({TextNICOrLicenceState: true})
                                                    }
                                                }}

                                            />

                                        </div>


                                    </div>


                                    <div style={{
                                        width: '100%',
                                        height: '100px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            ENTER THE ADDRESS
                                        </Box>
                                        <TextField
                                            onChange={(e) => {
                                                let data = e.target.value
                                                this.setState({
                                                    address: data
                                                })

                                            }}
                                            style={{width: '97.5%'}}
                                            className={classes.margin}
                                            placeholder={"address"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>
                                    <div style={{
                                        width: '100%',
                                        height: '100px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            ENTER THE CONTACT NUMBER
                                        </Box>
                                        <TextField
                                            onChange={(e) => {
                                                let data = e.target.value
                                                this.setState({
                                                    contactNum: data
                                                })

                                            }}
                                            style={{width: '97.5%'}}
                                            className={classes.margin}
                                            placeholder={"contact Number"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>
                                </div>


                            </div>

                            <div style={{display: this.state.imageVerifyDisplay,}}
                                 className={classes.createUserAccountContainer}>
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
                                        renderInput={(params) => <TextField {...params} label="Combo box"
                                                                            variant="outlined"/>}
                                        onChange={(event, value) => {
                                            switch (value.title) {
                                                case "NIC Number" :
                                                    this.setState({cmbState: "Upload front Image & back Image NIC"});
                                                    break;

                                                case  "Driving Licence" :
                                                    this.setState({cmbState: "Upload front Image & back Image Driving Licence"});
                                                    break;

                                            }
                                        }}
                                    />

                                </div>

                                <Divider/>


                                <div className={classes.ImageVerifyContainer}>

                                    <div className={classes.imageNameContainer}>

                                        <Typography variant="h6">Front Image</Typography>
                                        <Typography variant="h6">Back Image</Typography>

                                    </div>


                                    <div className={classes.imageCover}>


                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '5px 5px 10px 1.5px',
                                            height: '85%',
                                            width: '48%',
                                            backgroundImage: "url(" + this.state.FrontView + ")",
                                            backgroundSize: 'cover'
                                        }}>

                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '5px 5px 10px 1.5px',
                                            height: '85%',
                                            width: '48%',
                                            backgroundImage: "url(" + this.state.BackView + ")",
                                            backgroundSize: 'cover'
                                        }}>

                                        </div>


                                    </div>

                                    <div className={classes.browsButtonContainer}>
                                        <input
                                            style={{display: 'none'}}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                            onChange={(e) => {

                                                this.setState({
                                                    FrontImage: e.target.files[0],
                                                    FrontView: URL.createObjectURL(e.target.files[0])
                                                })


                                            }}
                                        />
                                        <label htmlFor="contained-button-file">
                                            <ReactButton variant="contained" color="primary" component="span"
                                            >

                                                Browse
                                            </ReactButton>
                                        </label>

                                        <input
                                            style={{display: 'none'}}
                                            accept="image/*"
                                            className={classes.input}
                                            id="contained-button-file1"
                                            multiple
                                            type="file"
                                            onChange={(e) => {
                                                this.setState({
                                                    BackImage: e.target.files[0],
                                                    BackView: URL.createObjectURL(e.target.files[0])
                                                })
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
                        <AlertDialog data={{
                            setStateRegisterForm: this.handleClose.bind(),
                            setCreateAccHide: this.hadleForm.bind()
                        }}/>

                        <Button style={{display: this.state.btn1Display}} variant="primary"

                                onClick={async () => {
                                    if (this.state.userName != '') {
                                        let res = await customerService.ifExistCustomerUserAccount(this.state.userName);
                                        if (res.code != 'ERR_BAD_REQUEST') {
                                            alert(res.data.message);

                                            this.setState({
                                                createAccDisplay: 'none',
                                                customerDetailsDisplay: 'block',
                                                btn1Display: 'none',
                                                btn2Display: 'block'
                                            })


                                        } else {
                                            alert(res.response.data.message);

                                        }
                                    } else {
                                        alert("TextField Empty")
                                    }
                                }}
                        >Next Step</Button>

                        <Button style={{display: this.state.btn2Display}} variant="primary"
                                onClick={async () => {
                                    let res = await customerService.ifExistEmail(this.state.email);
                                    if (this.state.email != '') {
                                        if (res.code != 'ERR_BAD_REQUEST') {
                                            alert(res.data.message);
                                            this.setState({
                                                createAccDisplay: 'none',
                                                customerDetailsDisplay: 'none',
                                                imageVerifyDisplay: 'block',
                                                btn1Display: 'none',
                                                btn2Display: 'none',
                                                btn3Display: 'block'
                                            })


                                        } else {
                                            alert(res.response.data.message);
                                        }
                                    } else {
                                        alert("Email is Empty")
                                    }
                                }}
                        >Next Step</Button>

                        <Button style={{display: this.state.btn3Display}} variant="primary"
                                onClick={async () => {
                                    this.setState({
                                        createAccDisplay: 'none',
                                        customerDetailsDisplay: 'none',
                                        imageVerifyDisplay: 'none',
                                        btn1Display: 'none',
                                        btn2Display: 'none',
                                        btn3Display: 'none'
                                    })
                                    await this.registerCustomer()

                                    //show login component

                                    this.setState({
                                        show: false
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