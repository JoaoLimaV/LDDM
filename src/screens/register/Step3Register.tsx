import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderRegister from '@components/HeaderRegister';
import Icons from '@icons/svgs';

import styles from '@styles/step54Style'

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

  React.useEffect(() => {
    let equalPassword = (inputValues.password === inputValues.rePassword) ? true : false

    if (inputValues.password.length != 0 && inputValues.rePassword.length != 0 && equalPassword && percentPassword >= 80) {
      setDisabled(false);
      return
    }
    setDisabled(true);
  }, [handleInputChange])
  // Hidden 

  const [hidden, setHidden] = useState<boolean>(true);


  const changeHiddenPassword = () => {
    setHidden(!hidden);
  };

  // BarColors e Width

  const [percentPasswordAnimate] = useState(new Animated.Value(0));
  const [percentPassword, setPercentPassword] = useState<number>(0);

  const barStyles = StyleSheet.create({
    div_bar: {
      height: 20,
      backgroundColor: percentPassword >= 80 ? '#82C165' : percentPassword >= 40 ? '#EBC911' : percentPassword <= 20 ? '#BA090B' : '#BA090B'
    },
  });

  function verifyPassword(pwd: string) {
    const hasNumbers = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pwd);
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);
    const hasEightCarac = (pwd.length >= 8 ) ? true : false; 

    const percent = ((hasNumbers ? 1 : 0) + (hasSpecial ? 1 : 0) + (hasUpperCase ? 1 : 0) + (hasLowerCase ? 1 : 0) + (hasEightCarac ? 1 : 0)) * 20;
    setPercentPassword(percent)

    Animated.timing(percentPasswordAnimate, {
      toValue: percent,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
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
              secureTextEntry={hidden}
              style={styles.inv_input}
              value={inputValues.password}
              onChangeText={(pwd) => { verifyPassword(pwd); handleInputChange('password', pwd); }}

            />
            <TouchableOpacity
              onPress={changeHiddenPassword}
            >
              <Icons.iconEye width={30} height={30} color='#282832' isSlashed={hidden}/>
            </TouchableOpacity>
          </View>

          <View style={styles.fake_input}>
            <TextInput
              placeholder="Confirme a senha"
              keyboardType="default"
              placeholderTextColor={"#282832"}
              secureTextEntry={hidden}
              style={styles.inv_input}
              value={inputValues.rePassword}
              onChangeText={(pwd) => { handleInputChange('rePassword', pwd); }}
            />
            <TouchableOpacity
              onPress={changeHiddenPassword}
            >
              <Icons.iconEye width={30} height={30} color='#282832' isSlashed={hidden}/>
            </TouchableOpacity>
          </View>

          <View style={styles.strong_password_div}>
            <Animated.View
              style={[barStyles.div_bar, { width: percentPasswordAnimate.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }]}
            ></Animated.View>
          </View>

        </View>
      </View>

      <View style={styles.container_btn_login}>
        <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled]}
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
    </Pressable>
  );
}

export default Step3Register;


