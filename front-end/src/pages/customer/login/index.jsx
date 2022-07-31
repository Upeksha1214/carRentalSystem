import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {AiFillPhone} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {ImLocation} from "react-icons/im";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import logo from "../../../assets/image/logo.svg"
import {TbPower} from "react-icons/tb";
import {RiAddCircleFill} from "react-icons/ri";
import RegisterCustomer from "../../register";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FindCarForm from "../FindCarForm";
import carData from "../../../assets/CarData/carData";
import CarItem from "./CarItem";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Link from "@material-ui/core/Link";
import {Container, ListGroup} from "reactstrap";

const quickLinks = [
    {
        path: "/about",
        display: "About",
    },

    {
        path: "#",
        display: "Privacy Policy",
    },

    {
        path: "/cars",
        display: "Car Listing",
    },
    {
        path: "/blogs",
        display: "Blog",
    },

    {
        path: "/contact",
        display: "Contact",
    },
    {
        path: "#",
        display: "HotLines",
    },
    {
        path: "#",
        display: "Services",
    },
];

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const date = new Date();
        const year = date.getFullYear();
        const {classes} = this.props;
        return (
            <body>
            <div className={classes.main_div}>


                <div className={classes.title_container}>
                    <BottomNavigation className={classes.navgation_container}>

                        <div className={classes.icon_container}>
                            <div className={classes.mobileIcon_container}>
                                <BottomNavigationAction label="Recants" icon={<AiFillPhone/>}/>
                                <ul className={classes.mobileNumberList}>
                                    <li>0711923150</li>
                                    <li>0778187735</li>
                                </ul>
                            </div>

                            <div className={classes.mail_container}>
                                <BottomNavigationAction label="Favorites" icon={<AiOutlineMail/>}/>
                                <ul className={classes.mailName}>
                                    upekshasachintha@gmail.com
                                </ul>
                            </div>

                            <div className={classes.location_container}>
                                <BottomNavigationAction label="Nearby" icon={<ImLocation/>}/>
                                <ul className={classes.location_deatail}>
                                    '123',colombo road,galle
                                </ul>
                            </div>
                        </div>
                    </BottomNavigation>
                    <Divider style={{borderTop: '4px solid '}}/>


                    <div className={classes.navBar_container}>


                        <img src={logo} alt=""/>

                        <div className={classes.button_container}>
                            <Button variant="contained" style={{backgroundColor: 'green', color: 'white'}}>
                                Home
                            </Button>

                            <div style={{color: 'white'}}>Cars</div>
                            <div style={{color: 'white'}}>Pages</div>
                            <div style={{color: 'white'}}>Service</div>
                            <div style={{color: 'white'}}>Blog</div>
                            <div style={{color: 'white'}}>Contact</div>
                            <div style={{color: 'white'}}>
                                <Button className={classes.loginButton}

                                        startIcon={<TbPower/>}

                                        onPointerEnter={(e) => {
                                            e.target.style.color = 'white'
                                            console.log("ok")
                                        }}

                                        onPointerLeave={(e) => {
                                            e.target.style.color = "white"
                                            console.log("cancel")
                                        }}
                                >Login</Button></div>
                            <div>
                                {/*<Button className={classes.registerButton}

                                        startIcon={<RiAddCircleFill/>}

                                        onPointerEnter={(e) => {
                                            e.target.style.color = 'white'
                                            console.log("ok")
                                        }}

                                        onPointerLeave={(e) => {
                                            e.target.style.color = 'white'
                                            console.log("cancel")
                                        }}
                                >Register</Button>*/}
                                <RegisterCustomer/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>






                <div className={classes.hero__form}>
                    <Container>
                        <Row className={classes.form__row}>
                            <Col lg="4" md="4">
                            </Col>

                            <Col lg="8" md="8" sm="12">
                                <FindCarForm/>
                            </Col>
                        </Row>
                    </Container>
                </div>









                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h6 className="section__subtitle">Come with</h6>
                            <h2 className="section__title">Hot Offers</h2>
                        </Col>

                        {carData.slice(0, 6).map((item) => (
                            <CarItem item={item} key={item.id} />
                        ))}
                    </Row>
                </Container>






            <footer className="footer">
                <Container>
                    <Row>
                        <Col lg="4" md="4" sm="12">
                            <div className="logo footer__logo">
                                <h1>
                                    <Link to="/home" className=" d-flex align-items-center gap-2">
                                        <i className="ri-car-line"></i>
                                        <span>
                                                <b>Rental Car</b> <br/>  Service
                                             </span>
                                    </Link>
                                </h1>
                            </div>
                            <p className="footer__logo-content">This project is designed
                                so as to be used by Car Rental Company specializing in renting
                                cars to customers. It is an online system through which customers
                                can view available cars, register, view profile and book car.
                                The advancement in Information Technology and internet
                                penetration has greatly enhanced various business processes
                                and communication between companies (services provider) and
                                their customers of which car rental industry is not left out.</p>

                        </Col>

                        <Col lg="2" md="4" sm="6">
                            <div className="mb-4">
                                <h5 className="footer__link-title">Quick Links</h5>
                                <ListGroup>{quickLinks.map((item, index) => (
                                    <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                                </ListGroup>
                            </div>
                        </Col>

                        <Col lg="3" md="4" sm="6">
                            <div className="mb-4">
                                <h5 className="footer__link-title mb-4">Head Office</h5>
                                <p className="office__info">N0:-50,Colombo Road,Galle </p>
                                <p className="office__info">Phone:- +9477-8187735 , +9471-1923150</p>
                                <p className="office__info">Email:- upekshasachintha@gmail.com</p>
                                <p className="office__info">Opening:- 9am - 7pm</p>
                                <p className="office__info">Branches :- Mathara / Galle / Colombo /Kandy</p>
                                <p className="office__info">Visit & Booking :- Totally fee</p>
                            </div>
                        </Col>

                        <Col lg="3" md="4" sm="12">
                            <div className="mb-4">
                                <h5 className="footer__link-title">Your Votes</h5>
                                <p className="section__descriptions">Subscribe our Page</p>
                                <div className="newsletter">
                                    <input type="email" placeholder="Email"/>
                                    <span>
                                          <i className="ri-send-plane-line"></i>
                                        </span>
                                </div>
                            </div>
                            <a href="#" className="login100-social-item bg1"><i className="ri-facebook-fill"></i></a>
                            <a href="#" className="login100-social-item bg1"><i className="ri-whatsapp-line"></i></a>
                            <a href="#" className="login100-social-item bg1"><i className="ri-instagram-fill"></i></a>
                            <a href="#" className="login100-social-item bg1"><i className="ri-twitter-fill"></i></a>
                        </Col>

                        <Col lg="12">
                            <div className="footer__bottom">
                                <p className="section__description d-flex align-items-center  color white justify-content-center gap-1 pt-4">
                                    <i className="ri-copyright-line"></i>Copyright {year}, Developed by Upeksha Sachintha . All rights reserved.                                    </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>







            </body>
        );
    }
}

export default withStyles(styleSheet)(Login)