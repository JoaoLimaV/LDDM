import { StyleSheet } from "react-native";

const userConfig: any = StyleSheet.create({
   
    scroolView:{
        flex: .85,
        paddingHorizontal: 10
    },
   
    header:{
        alignItems: 'center',
        gap: 20,
        paddingBottom: 20,
    },

    title:{
        fontSize: 25
    },

    icons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 170,
    },

    pen:{
        position: 'absolute',
        right: -7,
    },

    type:{
        flexDirection: 'column',
        width: '90%',
        borderWidth: 2,
        borderColor: '#D9D9D9',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textType:{
        fontSize: 18
    },

    checkBox:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
    },

    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputs:{
        gap: 20,
        paddingBottom: 20
    },

    textInput:{
        fontSize: 18,
        paddingLeft: 10,
    },

    endereco:{
        borderTopWidth: 2,
        borderColor: '#282832',
        gap: 20,
    },

    cep:{
        width: '100%',
        justifyContent: 'center'
    },

    flex:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 20,

    },

    border:{
        borderWidth: 2,
        borderColor: "#282832",
        borderRadius: 50,
        height: 50,
        width: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    flexEndereco:{
        flexDirection: 'row',
        gap: 10,
    },

    collunm1:{
        flex: 2,
        gap: 20,
    },

    collunm2:{
        flex: 1,
        gap: 20,
    },

    finish:{
        flex: .10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnFinish:{
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 15,
    },

    profile:{
        width: "100%",
        height: "100%",
        resizeMode: "contain",
        borderRadius: 200,
    },

    plus:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10
    },

    div_radio_btn: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#282832",
        fontSize: 16,
        fontFamily: 'Itim-Regular',
        justifyContent: 'center',
    },

 
})


export default userConfig;