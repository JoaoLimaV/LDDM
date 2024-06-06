import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, KeyboardAvoidingView, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderRegister from '@components/HeaderRegister';
import Icons from '@icons/svgs';

import { InterfaceHiddenPassword } from '@components/Interface';

import styles from '@styles/step3Style'

function Step3Register({ navigation, route }: any): React.JSX.Element {

  const { user_name, user_birthdate, user_email, user_phone, user_password } = route.params;

  const [inputValues, setInputValues] = React.useState({
    password: (user_password != undefined) ? user_password : '',
    rePassword: (user_password != undefined) ? user_password : ''
  });
  const [isDisabled, setDisabled] = React.useState<boolean>(true);

  const handleInputChange = (name: string, value: string) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  // Hidden 

  const [hiddenInput, setHiddenInput] = useState<InterfaceHiddenPassword>({
    password: { hidden: true },
    rePassword: { hidden: true }
  });

  const [conditionalPassword, setConditionalPassword] = useState({

  });

  const changeHiddenPassword = (name: string): void => {
    setHiddenInput({
      ...hiddenInput,
      [name]: {
        hidden: hiddenInput[name].hidden ? false : true,
      }
    });
  }

  // BarColors e Width

  const [percentPasswordAnimate] = useState(new Animated.Value(0));
  const [percentPassword, setPercentPassword] = useState({
    percent: 0,
    hasNumbers: false,
    hasSpecial: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasEightCarac: false,
  });

  const barStyles = StyleSheet.create({
    div_bar: {
      height: 20,
      backgroundColor: percentPassword.percent >= 80 ? '#82C165' : percentPassword.percent >= 40 ? '#EBC911' : percentPassword.percent <= 20 ? '#BA090B' : '#BA090B'
    },
  });

  function verifyPassword(pwd: string): void {

    const hasNumbers = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pwd);
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasEightCarac = (pwd.length >= 8) ? true : false;

    const percent = ((hasNumbers ? 1 : 0) + (hasSpecial ? 1 : 0) + (hasUpperCase ? 1 : 0) + (hasLowerCase ? 1 : 0) + (hasEightCarac ? 1 : 0)) * 20;
    setPercentPassword({
      ...percentPassword,
      ['percent']: percent,
      ['hasSpecial']: hasSpecial,
      ['hasNumbers']: hasNumbers,
      ['hasUpperCase']: hasUpperCase,
      ['hasLowerCase']: hasLowerCase,
      ['hasEightCarac']: hasEightCarac,
    })

    Animated.timing(percentPasswordAnimate, {
      toValue: percent,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  React.useEffect(() => {
    let equalPassword = (inputValues.password === inputValues.rePassword) ? true : false

    if (inputValues.password.length != 0 && inputValues.rePassword.length != 0 && equalPassword && percentPassword.percent >= 100) {
      setDisabled(false);
      return
    }
    setDisabled(true);
  }, [handleInputChange])


  const [hiddenButton, setHiddenButton] = React.useState<boolean>(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    setHiddenButton(true)
  };

  const _keyboardDidHide = () => {
    setHiddenButton(false)
  };

  return (
    <KeyboardAvoidingView style={defaultStyle.main_container}>
      {/* Header Personalizado */}
      <HeaderRegister onNavigateBack={() => navigation.navigate("Step2Register", {
        user_name: user_name,
        user_birthdate: user_birthdate,
        user_email: user_email,
        user_phone: user_phone,
        user_password: user_password
      })} />
      {/* Header Personalizado */}

      <View style={styles.container_input}>
        <Text style={[styles.text_principal, defaultStyle.text_black]}>
          Faça uma senha para acessar o BidCard
        </Text>

        <View style={styles.div_input}>
          <View style={styles.fake_input}>
            <TextInput
              placeholder="Senha"
              keyboardType="default"
              placeholderTextColor={"#282832"}
              secureTextEntry={hiddenInput.password.hidden}
              style={styles.inv_input}
              value={inputValues.password}
              onChangeText={(pwd) => { verifyPassword(pwd); handleInputChange('password', pwd); }}
            />
            <TouchableOpacity
              onPress={() => changeHiddenPassword('password')}
            >
              <Icons.iconEye width={30} height={30} color='#282832' isSlashed={hiddenInput.password.hidden} />
            </TouchableOpacity>
          </View>

          <View style={styles.fake_input}>
            <TextInput
              placeholder="Confirme a senha"
              keyboardType="default"
              placeholderTextColor={"#282832"}
              secureTextEntry={hiddenInput.rePassword.hidden}
              style={styles.inv_input}
              value={inputValues.rePassword}
              onChangeText={(pwd) => { handleInputChange('rePassword', pwd); }}
            />
            <TouchableOpacity
              onPress={() => changeHiddenPassword('rePassword')}
            >
              <Icons.iconEye width={30} height={30} color='#282832' isSlashed={hiddenInput.rePassword.hidden} />
            </TouchableOpacity>
          </View>

          <Text
            style={[defaultStyle.errorTextInput,
            inputValues.password == inputValues.rePassword && defaultStyle.display_none
            ]}
          > As senhas devem ser iguais </Text>

          <View style={styles.strong_password_div}>
            <Animated.View
              style={[barStyles.div_bar, { width: percentPasswordAnimate.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }]}
            ></Animated.View>
          </View>
        </View>

        <View
          style={[
            styles.div_conditional_password,
            (percentPassword.percent == 0 || percentPassword.percent == 100) && defaultStyle.display_none
          ]}
        >
          <Text style={[styles.text_conditional_password, percentPassword.hasEightCarac && styles.correct_conditional]}> * Mínimo de 8 caracteres</Text>
          <Text style={[styles.text_conditional_password, percentPassword.hasSpecial && styles.correct_conditional]}> * Pelo menos 1 caractere especial (!@#$%^&*) </Text>
          <Text style={[styles.text_conditional_password, percentPassword.hasNumbers && styles.correct_conditional]}> * Pelo menos 1 número (0-9)</Text>
          <Text style={[styles.text_conditional_password, percentPassword.hasUpperCase && styles.correct_conditional]}> * Pelo menos 1 letra maiúscula (A-Z)</Text>
          <Text style={[styles.text_conditional_password, percentPassword.hasLowerCase && styles.correct_conditional]}> * Pelo menos 1 letra minúscula (a-z)</Text>
        </View>
      </View>
      <View style={styles.container_btn_login}>
        <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled, hiddenButton && defaultStyle.hidden]}
          onPress={() => {
            navigation.navigate('Step4Register', {
              user_name: user_name,
              user_birthdate: user_birthdate,
              user_email: user_email,
              user_phone: user_phone,
              user_password: inputValues.password
            });
          }}
          disabled={isDisabled}
        >
          <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Avançar </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Step3Register;


