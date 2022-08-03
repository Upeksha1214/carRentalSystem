import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from "@material-ui/core/Link";
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
/*import icon from "../../../assets/icon/logo.png"*/


function CarDetailsPopUp(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {classes}=props;
    return (
        <>
            <button className=" w-50 car_item-btn car_btn-details"
                    onClick={handleShow} style={{
                color: '#716fd5', background: '#fdc575',
                borderRadius: 0,
                border: 'none',
                outline: 'none',
                padding: '8px 0px',fontWeight:'500',

            }}>
                Car Details
            </button>

            <Modal style={{ color : 'blue', background: 'rgba(255, 255, 255, 0)' , boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(8.8px)'}} size={"lg"} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {/*<img src={icon} alt=""/>*/}
                    <div style={{width : '150px'}}></div>
                    <Modal.Title><div>Car Details</div></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className={classes.mainContainer}>
                        <div className={classes.leftContainer}>

                            <ul style={{listStyleType : 'none', color:'white', fontFamily : 'Open Sans',fontSize : '12px', backgroundColor : "green"}}>
                                <li>

                                    <label style={{color : "#7bdcc2"}}>* Car Brand * </label>
                                    <p>example Car Brand</p>
                                </li>

                                <li>
                                    <label htmlFor="" style={{color : "#7bdcc2"}}>* Vehical Type * </label><br/>
                                    <p>example Car Type</p></li>

                                <li>
                                    <label htmlFor="" style={{color : "#7bdcc2"}}>* Number Of Passenger * </label><br/>
                                    <p>example Car Type</p></li>
                                <li>
                                    <label htmlFor="" style={{color : "#7bdcc2"}}>* transmissionType * </label><br/>
                                    <p>example Car Type</p></li>
                                <li>
                                    <label htmlFor="" style={{color : "#7bdcc2"}}>* daily price * </label><br/>
                                    <p>example Car Type</p></li>
                                <li>
                                    <label htmlFor="" style={{color : "#7bdcc2"}}>* monthly price * </label><br/>
                                    <p>example Car Type</p></li>
                                <li>
                                    <label htmlFor="" style={{color : "#7bdcc2"}}>* daily Free Km * </label><br/>
                                    <p>example Car Type</p></li>
                                <li>
                                    <label htmlFor="" style={{color : "#7bdcc2"}}>* monthly Free Km * </label><br/>
                                    <p>example Car Type</p></li>
                                <li>
                                    <label htmlFor="" style={{color : "#7bdcc2"}}>* price Of Extra Km * </label><br/>
                                    <p>example Car Type</p></li>

                            </ul>

                        </div>
                        <div className={classes.rightContainer}>

                            <div  className={classes.imagesGridContainer}  >

                                <div className={classes.images} ></div>
                                <div className={classes.images} ></div>
                                <div className={classes.images} ></div>
                                <div className={classes.images} ></div>

                            </div>

                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button style={{width : '200px'}} variant="success" onClick={handleClose}>
                        Rent Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default withStyles(styleSheet)(CarDetailsPopUp)