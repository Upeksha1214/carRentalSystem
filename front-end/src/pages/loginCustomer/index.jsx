import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {styleSheet} from "./style";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import customerService from "../../services/customerService";



class LoginCustomer extends Component{
      constructor(props) {
          super(props);

          this.state={
              show : false,
              userName : '',
              password : '',

              userNameError : false,
              userNameErrorMessage : '',
              passwordError : false,
              passwordErrorMessage : '',

              onDisableLoginButton : true
          }
      }

      loginCustomer=async () =>{
                let res =await customerService.checkCustomerUserAccount(this.state.userName,this.state.password);
          if (res.code != 'ERR_BAD_REQUEST') {
                 alert(res.data.message);

              } else {
              if (res.response.data.message=="Password Incorrect"){
                  this.setState({passwordError : true , passwordErrorMessage : res.response.data.message})
              }else if(res.response.data.message=="userName Incorrect"){
                  this.setState({userNameError : true , userNameErrorMessage : res.response.data.message})
              }
          }
      }

    handleClose = () => {
        this.setState({show : false})
    }
    handleShow = () =>{
        this.setState({show : true})
    }

      loginFormValidation=() =>{
          this.setState({onDisableLoginButton : true})
          var userName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
          var password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
              if (userName.test(this.state.userName)){
                  this.setState({userNameError : false , userNameErrorMessage : ''})
                  if (password.test(this.state.password)){
                      this.setState({passwordError : false , passwordErrorMessage : '' , onDisableLoginButton : false})
                  }else { this.setState({passwordError : true , passwordErrorMessage : 'invalid Password'})}

              }else {this.setState({userNameError : true , userNameErrorMessage : 'invalid Username'})}

      }

      render() {
          const {classes}=this.props;
        return(
            <>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            </Modal.Title>

                    </Modal.Header>
                    <Modal.Body>


                        <div className={classes.mainContainer}>

                            <Divider/>
                            <div className={classes.loginFormContainer}>

                                <TextField
                                    onChange={(e) =>{
                                        this.state.userName = e.target.value
                                        this.loginFormValidation()
                                    }}
                                    color="success"
                                    error={this.state.userNameError}
                                    label={this.state.userNameErrorMessage}
                                    style={{width : '80%'}}
                                    id="filled-search" type="search" variant="filled" />

                                <TextField
                                    onChange={(e) =>{
                                        this.state.password = e.target.value
                                        this.loginFormValidation()
                                    }}
                                    color="success"
                                    error={this.state.passwordError}
                                    style={{width : '80%'}}
                                    id="filled-password-input"
                                    label={this.state.passwordErrorMessage}
                                    type="password"
                                    autoComplete="current-password"
                                    variant="filled"
                                />

                                <Button
                                    disabled={this.state.onDisableLoginButton}
                                    onClick={async () =>{
                                        await this.loginCustomer();
                                    }}
                                    style={{width : '80%' , backgroundColor : '#FF6B1F'}}
                                    variant="outlined" color="primary">
                                    Primary
                                </Button>
                            </div>
                            <Divider/>



                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary"
                                onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}
export default withStyles(styleSheet) (LoginCustomer)
