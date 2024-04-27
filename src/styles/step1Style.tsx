import { StyleSheet } from "react-native";

const stepOneStyle: any = StyleSheet.create({
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
  div_input: {
    width: '100%',
    paddingTop: 10,
  },
  container_btn_login: {
    flex: .15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableInput: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  pressableText: {
    color: '#282832',
    fontFamily: 'Itim-Regular',
    fontSize: 16
  },
  title_text: {
    fontSize: 18
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

export default stepOneStyle;