import { StyleSheet } from "react-native";

const productStyle = StyleSheet.create({
    closure: {
        flex: 1,
        width: "100%",
        alignItems: 'flex-end',
        position: 'absolute',
        paddingLeft: 15,
        paddingTop: 25
    },
    textClosure: {
        fontSize: 16,
    },
    divSlide: {
        height: '60%',
        alignItems: 'center',
    },

    divImgs: {
        flexDirection: 'row',
        height: '90%',
        width: '100%',
    },

    divImgPrinc: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imgPrinc: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    img: {
        width: '90%',
        height: '80%',
    },

    divImgSecun: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imgSecun: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    divBtnSlide: {
        gap: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },

    btnSlide: {
        width: 9,
        height: 9,
        borderRadius: 10,
    },

    divDetails: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30,
    },

    title: {
        fontSize: 26,
    },

    divCategory: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        padding: 10,
    },

    category: {
        fontSize: 13,
    },

    separator: {
        height: 5,
        width: 5,
        borderRadius: 5,
    },

    details: {
        fontSize: 17,
        paddingHorizontal: 5
    },

    divHistoric: {
        paddingHorizontal: 15
    },

    historic: {
        fontSize: 21
    },

    border:{
        borderColor: '#282832',
        borderTopWidth: 1.5,
        position: 'absolute',
        bottom: 0,
        width: '110%',
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        height: 100
    },

    throw:{
        fontSize: 20
    },

    value:{
        fontSize: 26
    },

    divBtn:{
        gap: 7
    },

    btn:{
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 13,
        borderColor: '#6B63FF',
        borderWidth: 2,
    },

});

export default productStyle