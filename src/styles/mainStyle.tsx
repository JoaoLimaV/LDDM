import { StyleSheet } from "react-native";

const mainStyle: any = StyleSheet.create({
    /*Header*/
    header_container: {
      paddingTop: 20
    },
    div_input: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    div_search: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2.5,
      borderRadius: 10,
      borderColor: '#282832',
      paddingLeft: 7,
      paddingRight: 15
    },
    styled_input: {
      width: '90%',
      height: 35,
      paddingLeft: 7,
      paddingBottom: 3,
      fontSize: 18
    },
    notification_text: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    /*Body*/
    body_container: {
      flexDirection: 'column',
      marginTop: 20,
      borderTopWidth: 2,
      borderColor: '#282832',
      flex: 1
    },
    div_nav: {
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    btn_nav: {
      width: '20%',
      margin: 8,
      borderWidth: 2,
      borderRadius: 10,
      borderColor: '#6B63FF',
      flexDirection: 'column',
      paddingTop: "3%",
      paddingBottom: '1%',
      alignItems: 'center',
    },
    header_product: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    display_items: {
      borderWidth: 2,
      borderRadius: 20,
      borderColor: '#282832',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    items_style: {
      margin: 6,
    },
    scroll_product: {
      flex: 1
    },
    body_product: {
      height: 'auto',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    card_product: {
      marginTop: "4%",
      flexDirection: 'column',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 15,
      borderColor: '#D9D9D9',
      justifyContent: 'space-between',
    },
    card_top: {
      marginVertical: 10,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    div_image: {
      width: 140,
      height: 140,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image_product: {
      width: "90%",
      height: "90%",
      resizeMode: "contain"
    },
    desc_product: {
      borderBottomEndRadius: 10,
      borderBottomStartRadius: 10,
      width: "100%",
      backgroundColor: "#D9D9D9",
      flexDirection: 'row',
      alignItems: 'center'
    },
    desc_right: {
      paddingBottom: 10,
      paddingHorizontal: 10,
      width: 145
    }
  });

export default mainStyle;