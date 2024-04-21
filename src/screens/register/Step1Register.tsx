import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard } from 'react-native';
import DefaultStyle from '../../components/DefaultStyle'
import HeaderNavigation from '../../components/HeaderNavigation';


function Step1Register({ navigation }: any): React.JSX.Element {
  return (
    <Pressable style={DefaultStyle.main_container} onPress={Keyboard.dismiss}>
      <HeaderNavigation backScreen={'Home'} title='' icon={{viewBox: '', fill: '', d:''}} />

      <View style={styles.container_input}>
        <Text style={[styles.text_principal, DefaultStyle.text_black]}>
          Precisamos de algumos dados para cadastrar você em nossa plataforma
        </Text>

        <View style={styles.div_input}>
          <TextInput
            placeholder="Nome Completo"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={DefaultStyle.defaul_input}
          />
          <TextInput
            placeholder="Data de nascimento"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={DefaultStyle.defaul_input}
          />

        </View>
      </View>

      <View style={styles.container_btn_login}>
        <TouchableOpacity style={[DefaultStyle.default_btn, DefaultStyle.bg_blue]}
          onPress={() => {
            navigation.navigate('Step2Register');
          }}
        >
          <Text style={[DefaultStyle.btn_text, DefaultStyle.text_white]}> Avançar </Text>
        </TouchableOpacity>
      </View>
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

  container_btn_login: {
    flex: .15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Step1Register;


