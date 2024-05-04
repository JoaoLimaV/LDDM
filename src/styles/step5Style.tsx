import { StyleSheet } from "react-native";

const step4Style: any = StyleSheet.create({
  container_input: {
      flex: .85,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 20
  },
  text_principal: {
      fontSize: 28,
      width: '100%',
      textAlign: 'left'
  },
  text_second: {
      fontSize: 20,
      width: '100%',
      textAlign: 'left'
  },

  div_input: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 15,
      marginBottom: 5,
  },
  input: {
      width: '20%',
      height: 75,
      borderWidth: 2,
      borderColor: '#282832',
      color: '#282832',
      fontSize: 20,
      textAlign: 'center',
      borderRadius: 10,
  },

  container_btn_login: {
      flex: .15,
      justifyContent: 'center',
      alignItems: 'center',
  },
  containerHeader: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

});

export default step4Style;