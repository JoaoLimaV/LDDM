import { StyleSheet } from "react-native";

const notifyStyle: any = StyleSheet.create({

  absolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 15, // Ajuste conforme necessário para o espaçamento desejado
  },

  main_container: {
    flex: 1,
  },

  content_container: {
    paddingVertical: 10,
    borderWidth: 2.5,
    borderRadius: 20,
    borderColor: '#D9D9D9',
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },


  btn_bot: {
    width: "85%",
    height: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text_top: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
  },

  text_bot:
  {
    marginLeft: 20,
    fontSize: 20,
    alignItems: 'center',
  },

  text_small:
  {
    marginHorizontal: 20,
    fontSize: 15,
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  text_view:{
    flexDirection: 'column',
    justifyContent: 'space-between',
  }

});

export default notifyStyle;