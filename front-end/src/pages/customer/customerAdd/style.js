export const styleSheet = {

    all: {
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
    },

    nav: {
        display: 'flex',
        flexDirection: 'row',
        /*border:'2px solid black',*/
        justifyContent: "",
        alignItems: '',
        height: '10vh',
        backgroundColor: 'black',
    },

    main: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width : '95%',
    },

    form_background: {
        backgroundColor: 'white',
        width: '70%',
        height: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: "20px",
        boxShadow: '1px 1px 10px 0.2px',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '70%',
    },

    button_background: {
        display : 'flex',
        flexDirection : 'column',
        width : '20%',
        height : "75%",
        backgroundColor : '',
        alignItems : 'center',
        marginLeft : '50px',
        borderRadius: "20px",
        boxShadow: '1px 1px 10px 0.2px',
    },

    imageContainer :{
        marginTop: '10px',
        height : '30%',
        width : '97%',
        display : 'flex',
        flexDirection : 'row',
        backgroundColor :'#5b6161',
        alignItems : 'center',
        justifyContent : 'space-around',
        borderRadius: "20px",
        boxShadow: '1px 1px 10px 0.2px',

    },
    imageDiv : {
        height : '80%',
        width : '23%',
        backgroundColor : 'white'
    },


    form_textFieldForm2:{
        marginBottom: '10px',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        height : '17%',
        backgroundColor : '#5476EC',
        borderTopLeftRadius : '5px',
        borderTopRightRadius : '5px',

    },

    uploadImageButton:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'100%'
    },

    tableView:{
        backgroundColor:'red',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh',
    },

    table:{
        backgroundColor:'green',
        display: 'flex',
        flexDirection: 'column',
        width: '95vw',
        height: '100vh',
    }


}