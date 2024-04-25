import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';

import styles from '@styles/step1Style'

function Step1Register({ navigation }: any): React.JSX.Element {
  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      <HeaderNavigation backScreen={'Home'} title='' icon={{viewBox: '', fill: '', d:''}} />

      <View style={styles.container_input}>
        <Text style={[styles.text_principal, defaultStyle.text_black]}>
          Precisamos de alguns dados para cadastrar você em nossa plataforma
        </Text>

        <View style={styles.div_input}>
          <TextInput
            placeholder="Nome Completo"
            keyboardType="default"
            placeholderTextColor={"#282832"}
            secureTextEntry={false}
            style={defaultStyle.defaul_input}
          />
          <TextInput
            placeholder="Data de nascimento"
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
            navigation.navigate('Step2Register');
          }}
        >
          <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Avançar </Text>
        </TouchableOpacity>
      </View>
    </Pressable>
  );
}

export default Step1Register;


