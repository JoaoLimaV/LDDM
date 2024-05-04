import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import { RadioButton } from 'react-native-paper';
import HeaderRegister from '@components/HeaderRegister';
import Toast, { BaseToast } from 'react-native-toast-message';

import styles from '@styles/step6Style'
import axios from 'axios';
function Step6Register({ navigation, route }: any): React.JSX.Element {

  const { user_name, user_birthdate, user_email, user_phone, user_password } = route.params;

  const [checked, setChecked] = React.useState('reject');
  const [isDisabled, setDisabled] = React.useState<boolean>(true);

  const registerUser = async () => {
    setDisabled(true)

    Toast.show({
      type: 'success',
      text1: 'Email enviado',
      text2: 'Você será redirecionado em breve. Aguarde.',
      visibilityTime: 5000,
      onPress: () => {
        Toast.hide();
      }
    });

    let json = {
      name: user_name,
      email: user_email,
      phone: user_phone,
      birthdate: user_birthdate,
      password: user_password,
      cpf: null,
      status: 1
    }

    await axios.post(`http://192.168.100.7:3000/register`, json)
      .then(async (response) => {
        navigation.navigate('Login');
      })
      .catch(err => {
        console.error(err)
        setDisabled(false)
      });
  }

  return (
    <View style={defaultStyle.main_container}>
      {/* Header Personalizado */}
      <HeaderRegister onNavigateBack={() => navigation.navigate("Step5Register", {
              user_name: user_name,
              user_birthdate: user_birthdate,
              user_email: user_email,
              user_phone: user_phone,
              user_password: user_password
            })} />
      {/* Header Personalizado */}

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
            onPress={() => {
              setChecked('accept');
              setDisabled(false)
              console.log(`\nNome: ${user_name} \nNascimento: ${user_birthdate} \nEmail: ${user_email} \nTelefone: ${user_phone} \nSenha: ${user_password}`)
            }}
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

          <TouchableOpacity style={[styles.btn, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled]}
            onPress={() => {
              registerUser();
            }}
            disabled={isDisabled}
          >
            <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Aceitar </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Toast />
    </View>
  );
}

export default Step6Register;


