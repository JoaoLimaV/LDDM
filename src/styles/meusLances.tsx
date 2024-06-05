import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
    div_lance: {
        width: '80%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 2.5,
        borderRadius: 20,
        borderColor: "#D9D9D9",
        marginBottom: 15,
        alignSelf: 'center'
    },

    text_principal: {
        fontSize: 28,
        width: '100%',
        textAlign: 'left',
        paddingTop: 10,
        paddingBottom: 10
    },
    imgPrinc: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        width: 150,
        borderRadius: 50,
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },

});

export default styles;