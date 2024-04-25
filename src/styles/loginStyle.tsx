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
    image: {
      width: 35,
      height: 35
    },
  
    container_btn_login: {
      flex: .15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    new_user_text: {
      fontSize: 18,
      textAlign: 'center'
    }
  
  });

  
export default loginStyle