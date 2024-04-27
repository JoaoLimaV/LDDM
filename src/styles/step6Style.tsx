import { StyleSheet } from "react-native";

const step6Style: any = StyleSheet.create({
    text_principal: {
      fontSize: 28,
      width: '100%',
      textAlign: 'left',
      paddingTop: 10
    },
    scroll_view: {
      flex: .75,
      padding: 10
    },
    title_scroll: {
      fontSize: 24
    },
    text_scroll: {
      fontSize: 18,
      textAlign: 'justify',
      marginBottom: 5
    },
    container_btn_login: {
      flex: .25,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 2,
      borderColor: '#D9D9D9',
      marginTop: 10,
    },
    div_radio_btn: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10,
    },
    text_radio_btn: {
      fontSize: 14
    },
    div_buttons: {
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    btn: {
      width: '40%',
      borderRadius: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      fontFamily: 'Itim-Regular',
    },
    containerHeader: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    iconHeader: {
      width: 30,
      height: 30
    },
  });

export default step6Style;