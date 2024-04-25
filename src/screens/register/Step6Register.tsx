import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';
import { RadioButton } from 'react-native-paper';

function Step5Register({ navigation }: any): React.JSX.Element {

  const [checked, setChecked] = React.useState('reject');
  const [isDisabled, setDisabled] = React.useState<boolean>(true);

  return (
    <View style={defaultStyle.main_container}>
      <HeaderNavigation backScreen={'Step5Register'} title='' icon={{viewBox: '', fill: '', d:''}} />

      <Text style={[styles.text_principal, defaultStyle.text_black]}> Termos de Uso </Text>

      <ScrollView style={styles.scroll_view}>
        <Text style={[styles.title_scroll, defaultStyle.text_black]}> Uso de dados </Text>

        <Text style={[styles.text_scroll, defaultStyle.text_black]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <Text style={[styles.title_scroll, defaultStyle.text_black]}> Uso de dados </Text>

        <Text style={[styles.text_scroll, defaultStyle.text_black]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <Text style={[styles.title_scroll, defaultStyle.text_black]}> Uso de dados </Text>

        <Text style={[styles.text_scroll, defaultStyle.text_black]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <Text style={[styles.title_scroll, defaultStyle.text_black]}> Uso de dados </Text>

        <Text style={[styles.text_scroll, defaultStyle.text_black]}>
          Lorem Ipsum is simply dummy text omy text omy text omy text of the printing and typesetting industry. Lorem Ipsum hions of Lorem Ipsum.
        </Text>
      </ScrollView>

      <View style={styles.container_btn_login}>

        <View style={styles.div_radio_btn}>
          <RadioButton
            value="accept"
            status={checked === 'accept' ? 'checked' : 'unchecked'}
            onPress={() => { setChecked('accept'); setDisabled(false)}}
            color={'#6B63FF'}
          />
          <Text style={[styles.text_radio_btn, defaultStyle.text_black]}> Declaro que li e concordo com os Termos de Uso do BidCard </Text>
        </View>

        <View style={styles.div_buttons}>
          <TouchableOpacity style={[styles.btn, defaultStyle.bg_gray]}
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            <Text style={[defaultStyle.btn_text, defaultStyle.text_black]}> Rejeitar </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled ]}
           onPress={() => {
            !isDisabled && navigation.navigate('Home');
           }}
          >
            <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Aceitar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles: any = StyleSheet.create({
  text_principal: {
    fontSize: 28,
    width: '100%',
    textAlign: 'left',
    paddingTop: 10
  },

  scroll_view: {
    flex: .75,
    padding: 10
  },
  title_scroll: {
    fontSize: 24
  },
  text_scroll: {
    fontSize: 18,
    textAlign: 'justify',
    marginBottom: 5
  },
  container_btn_login: {
    flex: .25,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: '#D9D9D9',
    marginTop: 10,
  },
  div_radio_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  text_radio_btn: {
    fontSize: 14
  },
  div_buttons: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  btn: {
    width: '40%',
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: 'Itim-Regular',
  },
});

export default Step5Register;


