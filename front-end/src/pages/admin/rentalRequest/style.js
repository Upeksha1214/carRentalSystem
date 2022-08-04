/*import BankDetails from '../../../assets/image/bankDetails.jpeg'*/
export const styleSheet={

    mainContainer : {
        display: 'flex',
        flexDirection : 'row',
      width: '100%',
        height: '450px',
     //   backgroundColor : 'blue',

},

    topContainer : {
        display : 'flex',

        alignItems : 'center',
        justifyContent : 'center',
      /*  backgroundColor : 'red',*/
        width : '100%',
        height : '50%'
    },
    bottomContainer : {
        display : 'flex',
        alignItems : 'center',
        flexDirection: 'column',
        justifyContent : 'space-evenly',
      /*  backgroundColor : 'black',*/
        width : '100%',
        height : '50%'
    },
    contentContainer : {
        display : 'flex',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      /*  backgroundColor : 'yellow',*/
        width : '90%',
        height : '80%'
    },
    imageContainer : {
        width : '40%',
        height : '100%',
        backgroundColor : 'white',
        boxShadow : '1px 1px 1px 1px',
        borderRadius : '10px',

    },
    imageDetailsContainer : {
        width : '50%',
        height : '100%',
        scrollBehaviour: 'smooth',
        overflowY:'scroll',
        backgroundColor : 'gray',
        borderRadius : '10px',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-evenly',

    },
    pickupAndReturnDateAndTimeContainer : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        width : '80%',
        height : '27%',
        boxShadow : '1px 1px 3px 1px',
        borderRadius : '10px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(15.8px)',
       /* backgroundColor : 'red'*/
    },
    containerPickUpAndReturnLocation : {
        width : '80%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        height : '27%',
        borderRadius : '10px',
        justifyContent : 'space-evenly',
        boxShadow : '1px 1px 3px 1px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(15.8px)',
    },
    driverContainer : {
        width : '80%',
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        borderRadius : '10px',
        height : '27%',
        justifyContent : 'space-evenly',
        boxShadow : '1px 1px 3px 1px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(15.8px)',
    },
    radioButtonContainer : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        width : '10px'

    },
    radioContainer  : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        width : '180px',
    },


    textContainers : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        backgroundColor : '#404240',
        width : '100%',
        height : '30px',
    },
    rentCarForm : {
        width: '100%',
        height: '100%',
        //   backgroundColor : 'blue',
        background: 'linear-gradient(to right, #abbaab, #ffffff)'
    },
 /*   PaymentForm : {
        display : 'flex',
        flexDirection : 'row',
        width: '100%',
        height: '100%',
        //   backgroundColor : 'blue',
        background: 'linear-gradient(to right, #abbaab, #ffffff)'
    },*/

    PaymentFormContainer : {
       width : '100%',
        height : '100%'
    },
    paymentContainer : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
      /*  backgroundColor : 'blue',*/
        width : '100%',
        height : '100%',
    },



    leftContainerF : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'space-around',
        width : '40%',
        height : '100%',

        borderRight : '2px solid black'
    },

    rightContainerF : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        width : '60%',
        height : '100%',
       /* backgroundColor : 'gray'*/
    },

    damageSlipImageContainer : {
        width : '95%',
        height : '90%',
        backgroundColor : 'white',
        borderRadius : '15px',
        boxShadow : '1px 1px 5px 1px'
    },
    damageSlipImage : {
        width : '100%',
        height : '75%',
        /*backgroundColor : 'yellow',*/
        borderBottom : '2px solid black'
    },

    browsButton : {
        display : 'flex',
        width : '100%',
        height : '15%',
      /*  backgroundColor : 'green',*/
        alignItems : 'center',
        justifyContent : 'center',
    },

    bankDetailsContainer : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '95%',
        height : '90%',
        backgroundColor : 'white',
    },
    bankDetailsImage : {
        width : '90%',
        height : '75%',
        boxShadow : '1px 1px 5px 1px',
     /*   backgroundImage:"url(" +BankDetails+ ")",
        backgroundSize: 'cover'*/

    },

    paragraphBankDetails : {

    }



}