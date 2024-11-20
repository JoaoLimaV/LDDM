import { StyleSheet } from 'react-native'

const productStyle = StyleSheet.create({
  scroll_view: {
    flex: .85,
    paddingHorizontal: 10
  },

  imagens: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  imgPrinc: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300, // Increased size for centralizing the image
    height: 350,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  image_small: {
    width: 100,
    height: 150,
  },

  divBtnSlide: {
    gap: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnSlide: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  divDetails: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },

  title: {
    fontSize: 26,
    marginTop: 20
  },

  divCategory: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    padding: 10,
  },

  category: {
    fontSize: 13,
  },

  separator: {
    height: 5,
    width: 5,
    borderRadius: 5,
  },

  details: {
    fontSize: 17,
    paddingHorizontal: 5,
  },

  divHistoric: {
    paddingHorizontal: 15,
  },

  historic: {
    fontSize: 21,
  },

  border: {
    flex: .15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#282832',
    marginTop: 10,
  },

  throw: {
    fontSize: 20,
  },
  value: {
    fontSize: 26,
  },
  divBtn: {
    gap: 7,
  },
  btn: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 13,
    borderColor: '#6B63FF',
    borderWidth: 2,
  },
  not_history_bid: {
    fontSize: 20,
    opacity: .5,
    marginTop: 10
  },

  slide: {
    marginTop: 20,
  },

  imageSlider: {
    width: '100%',
    height: 350,
  },

  tamanhoSeta:{
    fontSize: 40
  }
})

export default productStyle
