import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard } from 'react-native';
import defaultStyle from "@components/DefaultStyle"
import HeaderNavigation from '@components/HeaderNavigation';


function Login({ navigation }: any): React.JSX.Element {
  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      <HeaderNavigation backScreen={'Home'} title='' icon={{viewBox: '', fill: '', d:''}} />

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
            <Image
              style={styles.image}
              source={require('@icons/icon_google.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item_login_with}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("@icons/icon_linkedin.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item_login_with}>
            <Image
              style={styles.image}
              source={require("@icons/icon_facebook.png")}
            />
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
          navigation.navigate('Step1Register');
        }}
      >
        É novo por aqui? Cadastre-se
      </Text>
    </Pressable>
  );
}

const styles: any = StyleSheet.create({
  container_input: {
    flex: .85,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20
  },
  text_principal: {
    fontSize: 28
  },
  div_input: {
    width: '100%',
    paddingTop: 10,
  },
  forgot_password: {
    marginTop: 10,
    textAlign: 'right',
    fontSize: 18
  },

  div_login_with: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item_login_with: {
    width: 75,
    height: 50,
    borderWidth: 2,
    borderColor: '#282832',
    margin: 10,
    textAlign: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35
  },

  container_btn_login: {
    flex: .15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  new_user_text: {
    fontSize: 18,
    textAlign: 'center'
  }

});

export default Login;


