import React, { useState } from 'react';
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
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";

function RegisterCustomer(props) {
    const [show, setShow] = useState(false);
    const [createAccDisplay,setCreateAccDisplay]=useState('block')
    const [customerDetailsDisplay,setCustomerDetailsDisplay]=useState('none')
    const [imageVerifyDisplay,setImageVerifyDisplay]=useState('none')
    const [btn1Display,setBtn1Display]=useState('block')
    const [btn2Display,setBtn2Display]=useState('none')


    const ValidationTextField = withStyles({
        root: {
            '& input:valid + fieldset': {
                borderColor: 'green',
                borderWidth: 2,
            },
            '& input:invalid + fieldset': {
                borderColor: 'red',
                borderWidth: 2,
            },
            '& input:valid:focus + fieldset': {
                borderLeftWidth: 6,
                padding: '4px !important', // override inline-style
            },
            width : '80%'
        },
    })(TextField);


    const handleClose = () =>{
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const hadleForm=() =>{
        setCreateAccDisplay('block')
        setCustomerDetailsDisplay('none')
        setImageVerifyDisplay('none')
        setBtn2Display("none")
        setBtn1Display('block')
    }

    const {classes} = props;

    return (
        <>
            <ReactButton
                startIcon={<RiAddCircleFill/>}
                style={{color: '#889988', TbPower :{color: '#898'}, flexShrink:1}}
                onClick={() =>{handleShow();}}

            >Register</ReactButton>

            <Modal

                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header >
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div  className={classes.registerContainer}>

                        <div style={{display : createAccDisplay}} className={classes.createUserAccountContainer}>


                            <div className={classes.userHeaderContainer}></div>


                            <div className={classes.textFieldContainer}>



                                <div style={{ width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        USER NAME
                                    </Box>
                                    <ValidationTextField
                                        className={classes.margin}
                                        placeholder={"Enter the UserName"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>

                                <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        PASSWORD
                                    </Box>
                                    <ValidationTextField
                                        className={classes.margin}
                                        placeholder={"Enter the password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>

                                <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-evenly'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        RE ENTER PASSWORD
                                    </Box>
                                    <ValidationTextField
                                        className={classes.margin}
                                        placeholder={"Re Enter password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>




                            </div>




                        </div>

                        <div style={{display : customerDetailsDisplay}} className={classes.createUserAccountContainer}>

                            <div className={classes.textFieldContainerCustomerDetails}>



                                <div style={{ width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        Email
                                    </Box>
                                    <ValidationTextField
                                        style={{width : '97.5%'}}
                                        className={classes.margin}
                                        placeholder={"Enter the Email"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>

                                <div style={{width : '100%' , height : '120px' , display : 'flex', flexDirection :'row' ,justifyContent : 'space-evenly'}}>

                                    <div style={{width : '50%' , height : '100%' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-around' }}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            Licence Or NIC Number
                                        </Box>
                                        <ValidationTextField
                                            style={{width: '93%'}}
                                            className={classes.margin}
                                            placeholder={"Enter"}
                                            size={'small'}
                                            variant="outlined"
                                            id="validation-outlined-input"
                                        />
                                    </div>

                                    <div style={{width : '50%' , height : '100%' , display : 'flex', flexDirection :'column',justifyContent : 'space-around'}}>
                                        <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                            Licence Or NIC Number
                                        </Box>
                                        <Autocomplete
                                            size={'small'}
                                            id="combo-box-demo"
                                            options={[{title: 'Driving Licence'}, {title: 'NIC Number'}]}
                                            getOptionLabel={(option) => option.title}
                                            style={{width: 200}}
                                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined"/>}
                                            onChange={(event, value) => {
                                                switch (value.title) {
                                                    case "NIC Number" :
                                                        let data1 = this.state.customerDerails.drivingLicence='';
                                                        this.setState({data1, TextLabel: "NIC NUMBER",});break;

                                                    case  "Driving Licence" :
                                                        let data2 = this.state.customerDerails.nic='';
                                                        this.setState({data2, TextLabel: "Driving Licence",});break;
                                                }
                                            }}

                                        />

                                    </div>



                                </div>


                                <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        RE ENTER PASSWORD
                                    </Box>
                                    <ValidationTextField
                                        style={{width : '97.5%'}}
                                        className={classes.margin}
                                        placeholder={"Re Enter password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>
                                <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        RE ENTER PASSWORD
                                    </Box>
                                    <ValidationTextField
                                        style={{width : '97.5%'}}
                                        className={classes.margin}
                                        placeholder={"Re Enter password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>
                                <div style={{width : '100%' , height : '100px' , display : 'flex', flexDirection :'column' ,justifyContent : 'space-between'}}>
                                    <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                                        RE ENTER PASSWORD
                                    </Box>
                                    <ValidationTextField
                                        style={{width : '97.5%'}}
                                        className={classes.margin}
                                        placeholder={"Re Enter password"}
                                        size={'small'}
                                        variant="outlined"
                                        id="validation-outlined-input"
                                    />
                                </div>



                            </div>


                        </div>

                        <div style={{display : imageVerifyDisplay , }}  className={classes.createUserAccountContainer}>
                            <div className={classes.textContainer}>

                                <Box fontWeight="fontWeightMedium" m={1}>
                                    Medium
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
                                                let data1 = this.state.customerDerails.drivingLicence='';
                                                this.setState({data1, TextLabel: "NIC NUMBER",});break;

                                            case  "Driving Licence" :
                                                let data2 = this.state.customerDerails.nic='';
                                                this.setState({data2, TextLabel: "Driving Licence",});break;
                                        }
                                    }}
                                />

                            </div>


                            <div  className={classes.ImageVerifyContainer}>


                                <div className={classes.imageCover}>


                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow : '5px 5px 10px 1.5px',
                                        height: '85%',
                                        width: '48%',
                                        /*   backgroundImage: "url(" + this.state.IDFrontView + ")",*/
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
                                        /*        backgroundImage: "url(" + this.state.IDBackView + ")",*/
                                        backgroundSize: 'cover'
                                    }}>

                                    </div>


                                </div>

                                <div className={classes.browsButtonContainer}>

                                    <label htmlFor="contained-button-file">
                                        <ReactButton variant="contained" color="primary" component="span">
                                            Upload
                                        </ReactButton>
                                    </label>
                                    <label htmlFor="contained-button-file">
                                        <ReactButton variant="contained" color="primary" component="span">
                                            Upload
                                        </ReactButton>
                                    </label>


                                </div>
                            </div>
                        </div>

                    </div>


                </Modal.Body>
                <Modal.Footer>

                    <AlertDialog data={{setStateRegisterForm : handleClose.bind(),setCreateAccHide : hadleForm.bind()}}/>

                    <Button style={{display : btn1Display}} variant="primary"
                            onClick={() =>{
                                setCreateAccDisplay('none')
                                setCustomerDetailsDisplay('block')
                                setBtn1Display('none')
                                setBtn2Display('block')
                            }}
                    >Next Step</Button>

                    <Button style={{display : btn2Display , color : 'green'}}  variant="primary"
                            onClick={() =>{
                                setCreateAccDisplay('none')
                                setCustomerDetailsDisplay('none')
                                setImageVerifyDisplay('block')

                            }}
                    >Next Step</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}
export default withStyles(styleSheet)(RegisterCustomer)