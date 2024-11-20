import { StyleSheet } from "react-native";

const loginStyle: any = StyleSheet.create({
  
    container_input: {
      flex: .85,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 20
    },

    text_principal: {
      fontSize: 28
    },

    div_input: {
      width: '100%',
      paddingTop: 10,
    },

    forgot_password: {
      marginTop: 10,
      textAlign: 'right',
      fontSize: 18
    },
  
    div_login_with: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    item_login_with: {
      width: 75,
      height: 50,
      borderWidth: 2,
      borderColor: '#282832',
      margin: 10,
      textAlign: 'center',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },

    container_btn_login: {
      flex: .15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    new_user_text: {
      fontSize: 18,
      textAlign: 'center'
    },
    fake_input: {
      width: "100%",
      height: 50,
      borderRadius: 50,
      paddingLeft: 13,
      paddingRight: 20,
      borderWidth: 2,
      borderColor: "#282832",
      marginTop: 10,
      marginBottom: 10,
      color: '#282832',
      fontFamily: 'Itim-Regular',
      fontSize: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    inv_input: {
      width: '90%',
      height: 50,
      borderRadius: 50,
      marginTop: 5,
      color: '#282832',
      fontFamily: 'Itim-Regular',
      fontSize: 16
    },
  
  });

  
export default loginStyle