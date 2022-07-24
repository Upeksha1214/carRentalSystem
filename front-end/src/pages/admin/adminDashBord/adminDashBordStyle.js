import myImage from "../../../assets/image/car2.jpg";

export const  styleSheet={

    allContainer:{
        display:'flex',
        flexDirection: 'column',
        height:'100vh',
        width:'100vw',
        background: "url(" + myImage + ")no-repeat center center fixed",
        backgroundSize: 'cover',
        fontFamily: 'Open Sans',
    },


    appBar:{
        /* From https://css.glass */
        background: 'rgba(255, 255, 255, 0)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(7px)',
        webkitBackdropFilter: 'blur(7px)',
        border: '1px solid rgba(255, 255, 255, 0.32)',
    },

    imageAddContainer:{
        flexDirection: 'column',
        display:'flex',
        height:'100%',
        width:'100%'

    },

    buttonAddContainer:{
        display:'flex',
        flexDirection: 'column',

    }

}
