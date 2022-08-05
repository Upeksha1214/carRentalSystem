import React, {Component} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {styleSheet} from "./ManageDriverStyle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import DriverService from "./../../../services/driverService";
import ViewAllDriverPopUpTable from "../../../compounts/ViewAllDriverPopup/driverTablePopupTable";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

class ManageDriver extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontImage: null,
            backImage: null,

            frontView:null,
            backView:null,

            driverDetails : {
                driverId : "",
                driverEmail : "",
                driverContactNumber : "",
                driverLicenseNumber :"",
                driverAddress : "",
                userName : "",
                password : "",
            }
        }
    }

    changeStateDriverDetails(id, driverEmail, driverContactNumber, driverLicenseNumber, driverAddress, frontImage,backImage){
        this.setState({
            driverDetails : {
                driverId : id,
                driverEmail : driverEmail,
                driverContactNumber : driverContactNumber,
                driverLicenseNumber :driverLicenseNumber,
                driverAddress : driverAddress,
            },

            frontView : frontImage,
            backView : backImage,


        })
    }



    uploadDrivingLicenceImages = async (driverId) => {
        var bodyFormData = new FormData();
        bodyFormData.append('param' , this.state.frontImage);
        bodyFormData.append('param' , this.state.backImage);

        let res = await DriverService.addDriverLicenseImage(bodyFormData,driverId);
        if (res.data.code===200){alert(res.data.message)}else {
            alert(res.data.message);
        }
    }





    addDriver = async () =>{

        var driverDetails = {
            driverId : this.state.driverDetails.driverId,
            email  : this.state.driverDetails.driverEmail,
            drivingLicence : this.state.driverDetails.driverLicenseNumber,
            address : this.state.driverDetails.driverAddress ,
            contactNumber : this.state.driverDetails.driverContactNumber,
            userName : this.state.driverDetails.userName,
            password : this.state.driverDetails.password,
            state : 'active'
        }

        let res = await DriverService.addDriver(driverDetails);
        if (res.data.code==200){
            alert(res.data.message);

            await this.uploadDrivingLicenceImages(this.state.driverDetails.driverId);

        }else {
            alert(res.data.message);
        }
    }




    updateDriver = async () =>{
        var driverUpdateDetails = {
            driverId : this.state.driverDetails.driverId,
            email  : this.state.driverDetails.driverEmail,
            contactNumber : this.state.driverDetails.driverContactNumber,
            address : this.state.driverDetails.driverAddress ,
            state : 'Pending'
        }

        let res =await DriverService.updateDriver(driverUpdateDetails);
        if (res.status===200){
            let front=this.state.frontImage;
            let back=this.state.backImage;
            let side=this.state.sideImage;
            let interior=this.state.interiorImage;
            let list=[front,back, side,interior]
            let viewList=["Front","Back","Side","Interior"]

            for (var i=0; i<list.length; i++){
                if (list[i] != null){
                    let formData = new FormData();
                    formData.append('idImage'/*,'driverLicenseImage'*/, list[i]);
                    await this.updateDriverIdImage(formData, driverUpdateDetails.driverId, viewList[i]);
                /*    await this.updateDriverLicenseImage(formData, driverUpdateDetails.driverId, viewList[i]);*/
                }
            }

            alert('Driver Details Update SuccessFull..')
        }else {
            alert("Driver update Fail..")
        }
    }
    deleteDriver = async () =>{

        let res =await DriverService.deleteDriver(this.state.driverDetails.driverId);
        if (res.status==200){

            let res =await DriverService.deleteDriverIdImage(this.state.driverDetails.driverId);
           // let res1 =await DriverService.deleteDriverLicenseImage(this.state.driverDetails.driverId);
            if ((res.data.code==200) /*|| (res1.data.code==200)*/ ){
                alert("CDriver Deleted Success")
                this.clearAllState()
            }
        }else {
            alert("Driver Delete Fail...")
        }

    }

    updateDriverIdImage=async (data,driverId,view) =>{
        let response =await DriverService.updateDriverIdImage(data,driverId,view);
        if (response.status!=200){
            alert("Driver Id Image Update Fail")
        }
    }
/*    updateDriverLicenseImage=async (data,driverId,view) =>{
        let response =await CarService.updateDriverLicenseImage(data,driverId,view);
        if (response.status!=200){
            alert("Driver License Image Update Fail")
        }
    }*/

    clearAllState=() =>{
        this.setState({
            frontImage: null,
            backImage: null,

            driverDetails : {
                driverId : '',
                driverEmail : '',
                driverContactNumber : '',
                driverLicenseNumber :'',
                driverAddress : '',
                }
        })
    }





    render() {

        const {classes} = this.props;
        return (
            <div className={classes.mainContainer}>
                <div className={classes.state_Bar_container}>
                    <AppBar position="static">
                        <Toolbar>
                            <display4 style={{
                                backgroundColor: '#0000A5',
                                fontSize: '43px',
                                width: '400px',
                                height: '64px',
                                fontFamily: 'sans-serif',
                            }}> Driver Manage Form
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

                            }}>Car Manage Form</Button>

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
                <div className={classes.form_Container}>
                    <div className={classes.form_backGround}>

                        <Divider/>
                        <div className={classes.formDividerText2Container}>
                            <h5 style={{color: 'black'}}>Driver Details</h5>
                        </div>
                        <Divider/>
                        <div className={classes.formTextFieldContainer}>

                            <TextField size={"small"} id="outlined-required" label="Driver ID" variant="outlined" value={this.state.driverDetails.driverId}
                                       onChange={(e) => {
                                           let formData = this.state.driverDetails
                                           formData.driverId = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            <TextField size={"small"} id="outlined-required" label="Email" variant="outlined" value={this.state.driverDetails.driverEmail}
                                       onChange={(e) => {let formData = this.state.driverDetails
                                           formData.driverEmail = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            <TextField size={"small"} id="outlined-required" label="Contact Number" variant="outlined" value={this.state.driverDetails.driverContactNumber}
                                       onChange={(e) => {let formData = this.state.driverDetails
                                           formData.driverContactNumber = e.target.value
                                           this.setState({ formData })
                                       }}/>

                            <TextField size={"small"} id="outlined-required" label="Driving License Number" variant="outlined" value={this.state.driverDetails.driverLicenseNumber}
                                       onChange={(e) => {let formData = this.state.driverDetails
                                           formData.driverLicenseNumber = e.target.value
                                           this.setState({ formData })
                                       }}/>
                            <TextField size={"small"} id="outlined-required" label="Address" variant="outlined" value={this.state.driverDetails.driverAddress}
                                       onChange={(e) => {let formData = this.state.driverDetails
                                           formData.driverAddress = e.target.value
                                           this.setState({ formData })
                                       }}/>


                            <TextField size={"small"} id="outlined-required" label="UserName" variant="outlined" value={this.state.driverDetails.userName}
                                       onChange={(e) => {let formData = this.state.driverDetails
                                           formData.userName = e.target.value
                                           this.setState({ formData })
                                       }}/>

                            <TextField size={"small"} id="outlined-required" label="Password" variant="outlined" value={this.state.driverDetails.password}
                                       onChange={(e) => {let formData = this.state.driverDetails
                                           formData.password = e.target.value
                                           this.setState({ formData })
                                       }}/>

                        </div>
                        
                        <Divider/>
                        <div className={classes.formDividerText2Container}>

                            <h5 style={{color: 'black'}}>License Front View</h5>
                            <h5 style={{color: 'black'}}>License Back View</h5>
                        </div>
                        <Divider/>

                        <div className={classes.imageContainer}>

                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.frontView + ")",
                                     backgroundSize: 'cover'
                                 }}>
                                image front
                            </div>

                            <div className={classes.imageDiv}
                                 style={{
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     height: '75%',
                                     backgroundImage: "url(" + this.state.backView + ")",
                                     backgroundSize: 'cover'
                                 }}>
                                image Back</div>

                        </div>






                        <div className={classes.uploadButtonContainer}>

                            <div><input
                                style={{display: 'none'}}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file02"
                                multiple
                                type="file"


                                onChange={(e) =>{
                                    this.setState({
                                        frontImage: e.target.files[0],
                                        frontView : URL.createObjectURL(e.target.files[0])
                                    })


                                }}

                            />
                                <label htmlFor="contained-button-file02">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image front
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
                                        backImage: e.target.files[0],
                                        backView: URL.createObjectURL(e.target.files[0])
                                    })
                                }

                                }
                            />
                                <label htmlFor="contained-button-file04">
                                    <Button variant="contained" color="primary" component="span">
                                        Upload Image back
                                    </Button>
                                </label>
                            </div>
                        </div>
                    </div>







                    <div className={classes.sideButton_container}>
                        <div className={classes.search_container}>
                            <TextField
                                label="Search Here"
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"

                                style={{borderRadius : '20px',width: '70%'}}
                            />
                            <Button variant="outlined" style={{color : 'green'}}>
                                Search
                            </Button>
                        </div>

                        <Divider/>

                        <div className={classes.button_container}>
                            <Button variant="outlined" style={{color : 'green' , width : '30%'}}
                                    onClick={async () => {
                                        this.addDriver();
                                    }}
                            >Save</Button>
                            <Button variant="outlined" style={{color : 'blue', width : '30%'}}
                                    onClick={async () => {
                                        this.updateDriver();
                                    }}
                            >Update</Button>
                            <Button variant="outlined" style={{color : 'red' , width : '30%'}}
                                    onClick={async () => {
                                        this.deleteDriver();
                                    }}
                            >Delete</Button>
                        </div>

                        <div className={classes.clearButton_Container}>
                            <ViewAllDriverPopUpTable data={{changeStateDriverDetails:this.changeStateDriverDetails.bind(this)}}/>

                            <Button variant="outlined" style={{color : 'back' , width : '95%'}}>Clear All</Button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default withStyles(styleSheet)(ManageDriver)