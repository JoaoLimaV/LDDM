import { StyleSheet } from 'react-native'

export const formProductStyle = StyleSheet.create({
    scroll_view: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 60,
        paddingHorizontal: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        paddingBottom: 10,
    },
    div_input: {
        width: '100%',
        paddingTop: 10,
    },
    div_file_Upload: {
        width: '100%',
        minHeight: 150,
        height: 'auto',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#282832",
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    div_files_uploaded: {
        height: 50,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#282832",
        width: '95%',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 5,
    },
    file_info_div: {
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    file_text_div: {
        paddingLeft: 5
    },
    text_file: {
        fontSize: 12,
        overflow: 'hidden',
        width: 180
    },
    file_btn_div: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    btn_file: {
        width: 30,
        height: 30,
        borderRadius: 5,
        borderWidth: 1.3,
        borderColor: "#282832",
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputMultiline: {
        height: 150,
        borderRadius: 25,
    },
    div_radio_btn: {
        width: '100%',
        height: 'auto',
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#282832",
        fontSize: 16,
        fontFamily: 'Itim-Regular',
    },
    text_radio_btn: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 16
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(40, 40, 50, 0.5)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },

    textPorcent: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        textAlign: 'right',
        paddingVertical: 5
    },

})


 export const selectCss = StyleSheet.create({
    placeholder: {
        color: '#282832', 
        fontFamily: 'Itim-Regular'
    },
})
