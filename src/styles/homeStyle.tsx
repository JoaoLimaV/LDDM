import { StyleSheet } from "react-native";

const homeStyle: any = StyleSheet.create({
    container_image: {
      flex: .45,
    },
    need_help: {
      textAlign: 'right',
      fontSize: 20,
    },
    divImage: {
      width: "100%",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      width: "90%",
      height: "90%",
      resizeMode: "contain",
    },
  
    container_principal: {
      flex: .55,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      fontSize: 40,
      textAlign: 'center',
    },
    lorem: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    btnText: {
      fontSize: 24,
    },
  
    notLogin: {
      marginTop: 15,
      fontSize: 18,
      textAlign: 'center'
    }
  });
  
  export default homeStyle;