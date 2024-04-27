import { StyleSheet } from "react-native";

const settingStyle: any = StyleSheet.create({


    main_container: {
        flex: .95,
    },

    content_container: {
        paddingVertical: 10,
        borderWidth: 2.5,
        borderRadius: 20,
        borderColor: '#D9D9D9',
        marginVertical: 15,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    container_img: {
        marginVertical: 15,
        alignItems: 'center'
    },

    div_nav: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    btn_top: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#D9D9D9',
        flexDirection: 'column',
        paddingTop: "3%",
        paddingBottom: '1%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },


    btn_bot: {
        marginLeft: 30,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },

    container_btn_exit: {
        flex: .13,
        justifyContent: 'center',
        alignItems: 'center',

    },

    btn_exit: {
        width: '60%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#BA090B',
        alignItems: 'center',
        paddingVertical: 5
    },

    text_top: {
        textAlign: 'center',
        fontSize: 13
    },

    text_bot:
    {
        marginLeft: 30,
        fontSize: 22,
        alignItems: 'center',
    },

});

export default settingStyle;