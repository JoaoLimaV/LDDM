import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import defaultStyle from "@components/DefaultStyle"

import styles from '@styles/homeStyle'

function Home({ navigation }: any) {
  return (
    <View style={defaultStyle.main_container}>
      <View style={styles.container_image}>
        <Text style={[styles.need_help, defaultStyle.text_black]}> Precisa de ajuda? </Text>

        <View style={styles.divImage}>
          <Image
            style={styles.image}
            source={require("@images/logo.png")}
          />
        </View>
      </View>

      <View style={styles.container_principal}>

        <Text style={[styles.welcome, defaultStyle.text_black]}>
          Bem vindo ao {'\n'}
          BidCard
        </Text>

        <Text style={[styles.lorem, defaultStyle.text_black]}>
          Neque porro quisquam est qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit...Neque porro quisquam
          est qui dolorem ipsum quia dolor  sit amet, consectetur, adipisci velit...
        </Text>

        <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue]}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={[styles.btnText, defaultStyle.text_white]}> Entre </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_gray]}
          onPress={() => {
            navigation.navigate('Step1Register', {});
          }}>
          <Text style={[styles.btnText, defaultStyle.text_black]}>
            Registre-se
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Main', { notLogin : true}) }}>
          <Text style={[styles.notLogin, defaultStyle.text_black]}>
            Ver Produtos sem Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;


