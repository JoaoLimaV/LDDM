import { StyleSheet } from "react-native";

const step5Style: any = StyleSheet.create({
  container_input: {
    flex: .85,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20
  },
  text_principal: {
    fontSize: 28,
    width: '100%',
    textAlign: 'left',
  },
  div_input: {
    width: '100%',
    paddingTop: 10,
  },
  fake_input: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    paddingLeft: 20,
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
    width: '90%'
  },
  icon: {
    width: 30,
    height: 30
  },
  strong_password_div: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 50,
    overflow: 'hidden'
  },
  container_btn_login: {
    flex: .15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default step5Style;