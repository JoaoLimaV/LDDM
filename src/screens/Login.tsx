import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, Keyboard } from 'react-native';
import defaultStyle from "@components/DefaultStyle"
import HeaderNavigation from '@components/HeaderNavigation';
import Icons from '@icons/svgs';
import styles from '@styles/loginStyle'
import axios from 'axios';
import Toast from 'react-native-toast-message';
import { ToastShow, styleToast } from '@components/Toast'

import { InterfaceHiddenPassword } from '@components/Interface'

function Login({ navigation }: any): React.JSX.Element {

  const [inputValues, setInputValues] = React.useState({
    login: '',
    password: ''
  });

  const [isDisabled, setDisabled] = React.useState<boolean>(true);

  const [hiddenInput, setHiddenInput] = React.useState<InterfaceHiddenPassword>({
    password: { hidden: true },
  });

  const changeHiddenPassword = (name: string): void => {
    setHiddenInput({
      ...hiddenInput,
      [name]: {
        hidden: hiddenInput[name].hidden ? false : true,
      }
    });
  }

  const handleInputChange = (name: string, value: string) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const loginUser = async () => {
    setDisabled(true);

    let json = {
      email: inputValues.login,
      password: inputValues.password
    }

    await axios.post(`${process.env.API_URL}/login`, json)
      .then(async (response) => {
        console.log(response.data.message)
        setDisabled(false);
      })
      .catch(err => {
        ToastShow("error", "Erro ao fazer login", 'Email ou senhas inválidos, tente novamente')
        setDisabled(false);
      });
  }

  React.useEffect(() => {
    if (inputValues.login != '' && inputValues.password != '') {
      setDisabled(false);
      return
    }
    setDisabled(true);
  }, [handleInputChange])

  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      <HeaderNavigation backScreen={'Home'} title='' icon={{ viewBox: '', fill: '', d: '' }} />

      <View style={styles.container_input}>
        <Text style={[styles.text_principal, defaultStyle.text_black]}>
          Estamos felizes vê-lo aqui. Faça Login para entrar
        </Text>

        <View style={styles.div_input}>
          <TextInput
            placeholder="Email"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={defaultStyle.defaul_input}
            onChangeText={(value) => handleInputChange('login', value)}

          />
          <View style={styles.fake_input}>
            <TextInput
              placeholder="Confirme a senha"
              keyboardType="default"
              placeholderTextColor={"#282832"}
              secureTextEntry={hiddenInput.password.hidden}
              style={styles.inv_input}
              value={inputValues.password}
              onChangeText={(value) => handleInputChange('password', value)}
            />
            <TouchableOpacity
              onPress={() => changeHiddenPassword('password')}
            >
              <Icons.iconEye width={30} height={30} color='#282832' isSlashed={hiddenInput.password.hidden} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.forgot_password, defaultStyle.text_blue]}> Esqueci minha senha </Text>
        </View>

        <View style={styles.div_login_with}>
          <TouchableOpacity style={styles.item_login_with}>
            <Icons.iconGoogle width={35} height={35} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item_login_with}>
            <Icons.iconLinkedin width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item_login_with}>
            <Icons.iconFacebook width={40} height={40} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container_btn_login}>
        <TouchableOpacity
          style={[defaultStyle.default_btn, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled]}
          onPress={() => {
            loginUser()
          }}
          disabled={isDisabled}
        >
          <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Entrar </Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.new_user_text, defaultStyle.text_black]}
        onPress={() => {
          navigation.navigate('Step1Register', {});
        }}
      >
        É novo por aqui? Cadastre-se
      </Text>

      <Toast config={styleToast} />
    </Pressable>
  );
}
export default Login;


