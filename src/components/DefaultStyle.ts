import { StyleSheet } from 'react-native';

const defaultStyle: any = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: "flex-start",
  },
  text_blue: {
    color: '#6B63FF',
    fontFamily: 'Itim-Regular'
  },
  bg_blue: {
    backgroundColor: '#6B63FF',
  },

  text_gray: {
    color: '#D9D9D9',
    fontFamily: 'Itim-Regular'
  },
  bg_gray: {
    backgroundColor: '#D9D9D9'
  },

  text_black: {
    color: '#282832',
    fontFamily: 'Itim-Regular'
  },
  bg_black: {
    backgroundColor: '#282832'
  },
  text_white: {
    color: '#FFF',
    fontFamily: 'Itim-Regular'
  },
  bg_white: {
    backgroundColor: '#FFF'
  },
  text_red: {
    color: '#BA090B',
    fontFamily: 'Itim-Regular'
  },

  text_green: {
    color: '#82C165',
    fontFamily: 'Itim-Regular'
  },

  defaul_input: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: "#282832",
    marginTop: 5,
    color: '#282832',
    fontFamily: 'Itim-Regular',
    fontSize: 16
  },

  default_btn: {
    width: '100%',
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'Itim-Regular',
    marginTop: 15,
  },
  btn_text: {
    fontSize: 20
  },
  disabled: {
    opacity: .5
  },
  errorTextInput: {
    textAlign: 'right',
    paddingRight: 10,
    fontSize: 14,
    color: '#BA090B'
  },
  display_none: {
    display: 'none'
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(40, 40, 50, 0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  hidden: {
    display: 'none'
  }
});

export default defaultStyle;
