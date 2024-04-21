import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    closure:{
        flex: 1,
        width:"100%",
        alignItems: 'flex-end',
        position: 'absolute',
        paddingLeft: 15,
        paddingTop: 25
    },

    textClosure:{
        fontSize: 16,
    },

    divSlide:{
        height: '60%',
        alignItems: 'center',
    },

    divImgs:{
        flexDirection: 'row',
        height: '90%',
        width: '100%',
    },

    divImgPrinc:{
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imgPrinc:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    img:{
        width: '90%',
        height: '80%',
    },

    divImgSecun:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgSecun:{
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    divBtnSlide:{
        gap: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },

    btnSlide:{
        width: 9,
        height: 9,
        borderRadius: 10,
    },

    divDetails:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
    },

    title:{
        fontSize: 26,
    },

    divCategory:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 10,
    },

    category:{
        fontSize: 13,
    },

    separator:{
        height: 5,
        width: 5,
        borderRadius: 5,
    },

    details:{
        fontSize: 17,
        paddingHorizontal: 5
    },

    divHistoric:{
        paddingHorizontal: 15
    },

    historic:{
        fontSize: 21
    },

    divThrow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        borderColor: '#282832',
        borderTopWidth: 1,
        bottom: 0,
        width: '110%',
        height: '12%',
        right: 0,
        left: 0
    },

    throw:{
        fontSize: 17
    },

    valueThrow:{
        fontSize: 23
    },

    divRowThrow:{
       flexDirection: 'column'  
    },

    borderBtn:{
        borderColor: '#6B63FF',
        borderWidth: 2,
    },

    divBtnThrow:{
        gap: 10
    },

    divBtn:{
        justifyContent: 'center',
    },

    align:{
        paddingVertical: 7,
        paddingHorizontal: 10,
        textAlign: 'center',
        borderRadius: 15,
        
    }


   
});

export default styles