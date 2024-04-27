import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';

import Svg, { Path } from 'react-native-svg';
import svg_icon from '@components/SvgIcons';
import styles from '@styles/step1Style'

function Step2Register({ navigation, route }: any): React.JSX.Element {

  const { user_name, user_birthdate, user_email, user_phone, user_password } = route.params;

  const [isDisabled, setDisabled] = React.useState<boolean>(true);
  const [inputValues, setInputValues] = React.useState({
    email: (user_email != undefined) ? user_email : '',
    phone: (user_phone != undefined) ? user_phone : ''
  });

  const handleInputChange = (name: string, value: string) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  React.useEffect(() => {
    let isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputValues.email.length != 0 && inputValues.phone.length == 11 && isEmail.test(inputValues.email)) {
      setDisabled(false);
      return
    }
    setDisabled(true);
  }, [handleInputChange])

  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      {/* Header Personalizado */}
      <View style={styles.containerHeader}>

        <TouchableOpacity
          style={styles.iconHeader}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("Step1Register", {
              user_name: user_name,
              user_birthdate: user_birthdate,
              user_email: user_email,
              user_phone: user_phone,
              user_password: user_password
            });
          }}
        >
          <Svg viewBox={svg_icon.arrow_left.viewBox}>
            <Path fill={svg_icon.arrow_left.fill} d={svg_icon.arrow_left.d} />
          </Svg>
        </TouchableOpacity>
      </View>
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
            style={defaultStyle.defaul_input}
            value={inputValues.email}
            onChangeText={(value) => handleInputChange('email', value)}
          />
          <TextInput
            placeholder="Telefone"
            keyboardType="default"
            maxLength={11}
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={defaultStyle.defaul_input}
            value={inputValues.phone}
            onChangeText={(value) => handleInputChange('phone', value.replace(/\D/g, ''))}
          />

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


