import React from "react";
import "../../../pages/Home/style.css";
import Col from "react-bootstrap/Col";
import CarDetailsPopUp from "../../../compounts/customer/CarDetailsPopup"


const CarItem = (props) => {
    const { imgUrl, carType, carName, automatic, state , price } = props.item;
    return (
        <Col lg="4"  className="mb-5">
            <div className="car__item">
                <div className="car__img">
                    <img src={imgUrl} alt="" className="w-100" />
                </div>

                <div className="car__item-content mt-4">
                    <h4 className="section__title text-center">{carName}</h4>
                    <h6 className="rent__price text-center mt-">
                        {price}.00 Rs/= <span>/ Day</span>
                    </h6>

                    <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                        <span className=" d-flex align-items-center gap-1">
                          <i class="ri-car-line"></i> {carType}
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                          <i class="ri-settings-2-line"></i> {automatic}
                        </span>
                        <span className=" d-flex align-items-center gap-1">
                          <i class="ri-timer-flash-line"></i> {state}
                        </span>
                    </div>

                    <button className=" w-50 car_item-btn car_btn-rent" style={{borderRadius: 0,
                        color:  '#61a5eb',
                        border: 'none',
                        outline: 'none',
                        background: 'rgba(7, 81, 238, 0.73)',
                        padding: '8px 0px'}}
                            onClick={() =>{
                                this.child.handleShow();
                            }}
                    >
                        Rent Now..
                    </button>
                    <CarDetailsPopUp ref={instance => { this.child = instance;}} {/*style={{background: '#fdc575'}}*/}/>
                </div>
            </div>
        </Col>
    );
};

export default CarItem;