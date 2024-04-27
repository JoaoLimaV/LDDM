import { StyleSheet } from "react-native";

const step3Style: any = StyleSheet.create({
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
  div_btn_code: {
    width: '100%',
    paddingTop: 10,
  },
  btn_icon: {
    width: '100%',
    height: 80,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 15
  },
  icon: {
    width: 50,
    height: 50,
  },
  text_icon: {
    paddingLeft: 5,
    fontSize: 20
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

export default step3Style;