import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard, StyleSheet } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderRegister from '@components/HeaderRegister';

import { InterfaceInputErrors } from '@components/Interface';
import messageErrorInput from '@components/messageErrorInput';

import styles from '@styles/step1Style'

import axios from 'axios';
import { TextInputMask } from 'react-native-masked-text'

function Step2Register({ navigation, route }: any): React.JSX.Element {

  // Route Params
  const { user_name, user_birthdate, user_email, user_phone, user_password } = route.params;

  // Disabled/Enable Button
  const [isDisabled, setDisabled] = React.useState<boolean>(true);

  // Inputs 
  const [wrongInput, setWrongInput] = React.useState<InterfaceInputErrors>({
    email: { error: undefined, messageError: '' },
    phone: { error: undefined, messageError: '' }
  });

  const [inputValues, setInputValues] = React.useState({
    email: (user_name != undefined) ? user_email : '',
    phone: (user_birthdate != undefined) ? user_phone : ''
  });

  const style_border_input = StyleSheet.create({
    wrong: {
      borderColor: '#BA090B'
    },
  });


  const handleInputChange = (name: string, value: string) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const verifyInputEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isEmail = emailRegex.test(inputValues.email);
    if (!isEmail || inputValues.email === '') {
      setWrongInput({
        ...wrongInput,
        email: {
          error: true,
          messageError: messageErrorInput.email[(inputValues.email === '') ? 1 : 2]
        }
      });
      return
    }

    axios.get(`${process.env.API_URL}/checkEmail/${inputValues.email}`)
      .then((response) => {
        setWrongInput({
          ...wrongInput,
          email: {
            error: true,
            messageError: messageErrorInput.email[3]
          }
        });
      })
      .catch(error => {
        setWrongInput({
          ...wrongInput,
          email: {
            error: false,
            messageError: messageErrorInput.email[0]
          }
        });
      });
  }

  const verifyInputNumber = () => {
    if (!inputValues.phone || inputValues.phone.length != 11) {
      setWrongInput({
        ...wrongInput,
        phone: {
          error: true,
          messageError: messageErrorInput.phone_number[(!inputValues.phone) ? 1 : 2]
        }
      });
      return
    }


    axios.get(`${process.env.API_URL}/checkPhone/${inputValues.phone.toString()}`)
      .then(() => {
        setWrongInput({
          ...wrongInput,
          phone: {
            error: true,
            messageError: messageErrorInput.phone_number[3]
          }
        });
      })
      .catch(() => {
        setWrongInput({
          ...wrongInput,
          phone: {
            error: false,
            messageError: messageErrorInput.phone_number[0]
          }
        });
      });
  }

  React.useEffect(() => {
    if (wrongInput.email.error == false && wrongInput.phone.error == false) {
      setDisabled(false);
      return
    }
    setDisabled(true);
  }, [verifyInputEmail, verifyInputNumber])

  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      {/* Header Personalizado */}
      <HeaderRegister onNavigateBack={() => navigation.navigate("Step1Register", {
              user_name: user_name,
              user_birthdate: user_birthdate,
              user_email: user_email,
              user_phone: user_phone,
              user_password: user_password
            })} />
      {/* Header Personalizado */}

      <View style={styles.container_input}>
        <Text style={[styles.text_principal, defaultStyle.text_black]}>
          Agora preencha com suas informações de contato
        </Text>

        <View style={styles.div_input}>
          <TextInput
            placeholder="E-mail"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={[defaultStyle.defaul_input, wrongInput.email.error && style_border_input.wrong]}
            value={inputValues.email}
            onChangeText={(value) => handleInputChange('email', value)}
            onBlur={() => verifyInputEmail()}
          />
          <Text style={defaultStyle.errorTextInput}> {wrongInput.email.messageError} </Text>

          <TextInputMask
            type={'cel-phone'}
            placeholder="Telefone"
            keyboardType="numeric"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={[defaultStyle.defaul_input, wrongInput.phone.error && style_border_input.wrong]}
            value={inputValues.phone}
            onChangeText={(value) => handleInputChange('phone', value.replace(/\D/g, ''))}
            onBlur={() => verifyInputNumber()}
          />
          <Text style={defaultStyle.errorTextInput}> {wrongInput.phone.messageError} </Text>
        </View>
      </View>

      <View style={styles.container_btn_login}>
        <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled]}
          onPress={() => {
            navigation.navigate('Step3Register', {
              user_name: user_name,
              user_birthdate: user_birthdate,
              user_email: inputValues.email,
              user_phone: inputValues.phone,
              user_password: user_password
            });
          }}
          disabled={isDisabled}
        >
          <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Avançar </Text>
        </TouchableOpacity>
      </View>
    </Pressable >
  );
}

export default Step2Register;


