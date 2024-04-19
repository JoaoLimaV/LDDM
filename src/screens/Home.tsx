import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DefaultStyle from '../components/DefaultStyle';

function Home({ navigation }: any) {
  return (
    <View style={DefaultStyle.main_container}>
      <View style={styles.container_image}>
        <Text style={[styles.need_help, DefaultStyle.text_black]}> Precisa de ajuda? </Text>

        <View style={styles.divImage}>
          <Image
            style={styles.image}
            source={require("../../assets/images/logo.png")}
          />
        </View>
      </View>

      <View style={styles.container_principal}>

        <Text style={[styles.welcome, DefaultStyle.text_black]}>
          Bem vindo ao {'\n'}
          BidCard
        </Text>

        <Text style={[styles.lorem, DefaultStyle.text_black]}>
          Neque porro quisquam est qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit...Neque porro quisquam
          est qui dolorem ipsum quia dolor  sit amet, consectetur, adipisci velit...
        </Text>

        <TouchableOpacity style={[DefaultStyle.default_btn, DefaultStyle.bg_blue]}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={[styles.btnText, DefaultStyle.text_white]}> Entre </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[DefaultStyle.default_btn, DefaultStyle.bg_gray]}>
          <Text style={[styles.btnText, DefaultStyle.text_black]}
            onPress={() => {
              navigation.navigate('Step1Register');
            }}
          >
             Registre-se 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigation.navigate('Main');}}>
        <Text style={[styles.notLogin, DefaultStyle.text_black]}>
          Ver Produtos sem Entrar
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles: any = StyleSheet.create({
  container_image: {
    flex: .45,
  },
  need_help: {
    textAlign: 'right',
    fontSize: 20,
  },
  divImage: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },

  container_principal: {
    flex: .55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
  },
  lorem: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  btnText: {
    fontSize: 24,
  },

  notLogin: {
    marginTop: 15,
    fontSize: 18,
    textAlign: 'center'
  }
});

export default Home;


