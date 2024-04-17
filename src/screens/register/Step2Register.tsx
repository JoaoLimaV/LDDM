import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard } from 'react-native';
import DefaultStyle from '../../components/DefaultStyle'
import HeaderNavigation from '../../components/HeaderNavigation';


function Step2Register({ navigation }: any): React.JSX.Element {
  return (
    <Pressable style={DefaultStyle.main_container} onPress={Keyboard.dismiss}>
      <HeaderNavigation backScreen={'Step1Register'} title='' />

      <View style={styles.container_input}>
        <Text style={[styles.text_principal, DefaultStyle.text_black]}>
          Agora preencha com suas informações de contato
        </Text>

        <View style={styles.div_input}>
          <TextInput
            placeholder="E-mail"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={DefaultStyle.defaul_input}
          />
          <TextInput
            placeholder="Telefone"
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
            navigation.navigate('Step3Register');
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
    fontSize: 28,
    width: '100%',
    textAlign: 'left'
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

export default Step2Register;


