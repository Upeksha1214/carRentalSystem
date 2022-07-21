import myImage from "../../../assets/image/av.jpg";

export const styleSheet = {

    main_div: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        height: "100vh",
        weight: "100vw",
        /*alignItems : 'center',
        justifyContent  : 'center',*/
        background: "url(" + myImage + ")no-repeat center center fixed",
        backgroundSize: 'cover',
        fontFamily: 'Open Sans',


    },


    title_container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
        /*backgroundColor:'#008000',*/
        /*background: 'rgba(255, 255, 255, 0.17)'*/
        /*  backgroundColor : 'blue',*/
        background: 'rgba(20, 41, 53, 0.39)',
        backdropFilter: 'blur(1.4px)',


    },

    navBar_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '15%',



    },
    button_container: {
        /*  backgroundColor : 'blue',*/
        width: '45%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',


    },

    formControl: {
        height: '10%',
        width: '70px',
        marginLeft: '30px'

    },


    navgation_container: {
        background: 'rgba(255, 255, 255, 0)'
    },
    icon_container: {
        width: '900px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        left: '233px',

    },

    mobileIcon_container: {
        display: 'flex',
        flexDirection: 'row',
        left: '50px',

        width: '300px'
    },
    mobileNumberList: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        left: '-55px',
        justifyContent: 'center',

    },


    mail_container: {
        display: 'flex',
        flexDirection: 'row',
        left: '50px',
        width: '300px'

    },

    mailName: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        left: '-55px',
        justifyContent: 'center',
    },


    location_container: {
        display: 'flex',
        flexDirection: 'row',
        left: '50px',

        width: '300px'

    },

    location_deatail: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        left: '-55px',
        justifyContent: 'center',
    },


    form_container: {},


}