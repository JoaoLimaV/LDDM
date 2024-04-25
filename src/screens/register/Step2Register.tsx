import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';

import styles from '@styles/step1Style'

function Step2Register({ navigation }: any): React.JSX.Element {
  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      <HeaderNavigation backScreen={'Step1Register'} title='' icon={{viewBox: '', fill: '', d:''}} />

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
          />
          <TextInput
            placeholder="Telefone"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={defaultStyle.defaul_input}
          />

        </View>
      </View>

      <View style={styles.container_btn_login}>
        <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue]}
          onPress={() => {
            navigation.navigate('Step3Register');
          }}
        >
          <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Avançar </Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

export default Step2Register;


