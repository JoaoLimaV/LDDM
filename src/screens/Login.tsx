import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, Keyboard } from 'react-native';
import defaultStyle from "@components/DefaultStyle"
import HeaderNavigation from '@components/HeaderNavigation';
import Icons from '@icons/svgs';

import styles from '@styles/loginStyle'

function Login({ navigation }: any): React.JSX.Element {
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
          />
          <TextInput
            placeholder="Senha"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={defaultStyle.defaul_input}
          />

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
        <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue]}>
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
    </Pressable>
  );
}
export default Login;


