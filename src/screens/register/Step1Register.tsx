import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard, Alert } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import DatePicker from 'react-native-date-picker'
import styles from '@styles/step1Style'

import Svg, { Path } from 'react-native-svg';
import svg_icon from '@components/SvgIcons';

function Step1Register({ navigation, route }: any): React.JSX.Element {

  const { user_name, user_birthdate, user_email, user_phone, user_password } = route.params;

  const [isDisabled, setDisabled] = React.useState<boolean>(true);
  const [inputValues, setInputValues] = React.useState({
    name: (user_name != undefined) ? user_name : '',
    birthdate: (user_birthdate != undefined) ? user_birthdate : ''
  });
  const [correctInput, setCorrectInput] = React.useState(['#282832', '#282832']);

  const handleInputChange = (name: string, value: string) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  // DataPicker

  const [date, setDate] = React.useState<Date>(new Date);
  const [open, setOpen] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (inputValues.name.length != 0 && inputValues.birthdate.length != 0) {
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
            navigation.navigate("Home");
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
          Precisamos de alguns dados para cadastrar você em nossa plataforma
        </Text>

        <View style={styles.div_input}>
          <TextInput
            value={inputValues.name}
            placeholder="Nome Completo"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={defaultStyle.defaul_input}
            onChangeText={(value) => handleInputChange('name', value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, ''))}
          />
          <Pressable style={[defaultStyle.defaul_input, styles.pressableInput]} onPress={() => setOpen(true)} >
            <Text style={styles.pressableText}>
              {inputValues.birthdate !== "" ? `${inputValues.birthdate}` : 'Data de Nascimento'}
            </Text>
          </Pressable>
          <DatePicker
            modal
            open={open}
            date={date}
            locale='pt-BR'
            mode={"date"}
            title={"Selecione a data"}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
              handleInputChange('birthdate', `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />

        </View>
      </View>

      <View style={styles.container_btn_login}>
        <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled]}
          onPress={() => {
            navigation.navigate('Step2Register', {
              user_name: inputValues.name,
              user_birthdate: inputValues.birthdate,
              user_email: user_email,
              user_phone: user_phone,
              user_password: user_password
            });
          }}
          disabled={isDisabled}
        >
          <Text style={[defaultStyle.btn_text, defaultStyle.text_white]} > Avançar </Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

export default Step1Register;


