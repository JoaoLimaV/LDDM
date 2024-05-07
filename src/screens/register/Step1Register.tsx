import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard, StyleSheet } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import DatePicker from 'react-native-date-picker'
import HeaderRegister from '@components/HeaderRegister';
import messageErrorInput from '@components/messageErrorInput';
import { InterfaceInputErrors } from '@components/Interface';

import styles from '@styles/step1Style'

function Step1Register({ navigation, route }: any): React.JSX.Element {

  // Route Params
  const { user_name, user_birthdate, user_email, user_phone, user_password } = route.params;

  // Disabled/Enable Button
  const [isDisabled, setDisabled] = React.useState<boolean>(true);

  // Inputs 
  const [wrongInput, setWrongInput] = React.useState<InterfaceInputErrors>({
    name: { error: undefined, messageError: '' },
    birthdate: { error: undefined, messageError: '' }
  });

  const inputName = React.useRef<TextInput>(null);

  const [inputValues, setInputValues] = React.useState({
    name: (user_name != undefined) ? user_name : '',
    birthdate: (user_birthdate != undefined) ? user_birthdate : ''
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

  const verifyInputName = () => {
    // Copia o Objeto e Altera. 
    setWrongInput({
      ...wrongInput,
      name: {
        error: (inputValues.name === '') ? true : false,
        messageError: messageErrorInput.name[(inputValues.name === '') ? 1 : 0]
      }
    });
  }

  const verifyInputBirth = (data: string) => {
    // [0] - Year | [1] - [Mouth] | [2] - Day
    let dateUser: number[] = data.split('-').map(Number);

    let dateNow = new Date();
    let age = dateNow.getFullYear() - dateUser[0];

    // Se verdadeiro, mata o código aqui. 
    if (dateUser[0] > dateNow.getFullYear() || data == '') {
      setWrongInput({
        ...wrongInput,
        birthdate: {
          error: true,
          messageError: messageErrorInput.birthdate[(dateUser[0] > dateNow.getMonth()) ? 3 : 1]
        }
      });
      return
    }

    if (age == 18) {
      if (dateUser[1] > dateNow.getMonth()) {
        age = 0;
      } else if (dateNow.getMonth() === dateUser[1] && dateUser[2] > dateNow.getDate()) {
        age = 0;
      }
    }

    setWrongInput({
      ...wrongInput,
      birthdate: {
        error: (age < 18 ? true : false),
        messageError: messageErrorInput.birthdate[(age < 18) ? 2 : 0]
      }
    });
  }

  React.useEffect(() => {
    if (wrongInput.name.error == false && wrongInput.birthdate.error == false) {
      setDisabled(false);
      return
    }
    setDisabled(true);
  }, [verifyInputName, verifyInputBirth])

  // DataPicker

  const [date, setDate] = React.useState<Date>(new Date);
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      {/* Header Personalizado */}
      <HeaderRegister onNavigateBack={() => navigation.navigate("Home")} />
      {/* Header Personalizado */}

      <View style={styles.container_input}>
        <Text style={[styles.text_principal, defaultStyle.text_black]}>
          Precisamos de alguns dados para cadastrar você em nossa plataforma
        </Text>

        <View style={styles.div_input}>
          <TextInput
            id='name'
            value={inputValues.name}
            placeholder="Nome Completo"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            onBlur={() => verifyInputName()}
            style={[defaultStyle.defaul_input, wrongInput.name.error && style_border_input.wrong]}
            onChangeText={(value) => handleInputChange('name', value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, ''))}
            ref={inputName}
          />
          <Text style={defaultStyle.errorTextInput}> {wrongInput.name.messageError} </Text>

          <Pressable
            style={[defaultStyle.defaul_input, styles.pressableInput, wrongInput.birthdate.error && style_border_input.wrong]}
            onPress={() => setOpen(true)} >
            <Text style={styles.pressableText}>
              {inputValues.birthdate !== "" ?
                `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` :
                'Data de Nascimento'
              }
            </Text>
          </Pressable>
          <Text style={defaultStyle.errorTextInput}> {wrongInput.birthdate.messageError} </Text>

          <DatePicker
            id='birthdate'
            modal
            open={open}
            date={date}
            locale='pt-BR'
            mode={"date"}
            title={"Selecione a data"}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
              handleInputChange('birthdate', `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
              verifyInputBirth(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
              { inputName.current && inputName.current.blur();}
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


