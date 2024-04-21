import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Pressable, Keyboard } from 'react-native';
import DefaultStyle from '../../components/DefaultStyle'
import svg_icon from '../../components/SvgIcons';

import HeaderNavigation from '../../components/HeaderNavigation';
import Svg, { Path } from 'react-native-svg';

function Step5Register({ navigation }: any): React.JSX.Element {
  // Hidden 

  const [hidden, setHidden] = useState<boolean>(true);
  const [viewBox, setViewBox] = useState<string>(svg_icon.normal_eye.viewBox);
  const [d, setD] = useState<string>(svg_icon.normal_eye.d);

  const changeHiddenPassword = () => {
    if (hidden) {
      setHidden(false)
      setViewBox(svg_icon.normal_eye.viewBox)
      setD(svg_icon.normal_eye.d)
      return
    }
    setHidden(true)
    setViewBox(svg_icon.slash_eye.viewBox)
    setD(svg_icon.slash_eye.d)
  }

  // BarColors e Widht
  
  const [percentPasswordAnimate] = useState(new Animated.Value(0));
  const [percentPassword, setPercentPassword] = useState<number>(0);

  const barStyles = StyleSheet.create({
    div_bar: {
      height: 20,
      backgroundColor: percentPassword >= 75 ? '#82C165' : percentPassword >= 50 ? '#EBC911' : percentPassword <= 25 ? '#BA090B' : '#BA090B'
    },
  });

  function verifyPassword(pwd: string) {
    const hasNumbers = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pwd);
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasLowerCase = /[a-z]/.test(pwd);

    const percent = ((hasNumbers ? 1 : 0) + (hasSpecial ? 1 : 0) + (hasUpperCase ? 1 : 0) + (hasLowerCase ? 1 : 0)) * 25;
    setPercentPassword(percent)

    Animated.timing(percentPasswordAnimate, {
      toValue: percent,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }

  return (
    <Pressable style={DefaultStyle.main_container} onPress={Keyboard.dismiss}>
      <HeaderNavigation backScreen={'Step4Register'} title='' icon={{viewBox: '', fill: '', d:''}} />

      <View style={styles.container_input}>
        <Text style={[styles.text_principal, DefaultStyle.text_black]}>
          Faça uma senha para acessar o BidCard
        </Text>

        <View style={styles.div_input}>
          <View style={styles.fake_input}>
            <TextInput
              placeholder="Senha"
              keyboardType="default"
              placeholderTextColor={"#282832"}
              secureTextEntry={hidden}
              style={styles.inv_input}
              onChangeText={(pwd) => { verifyPassword(pwd) }}
            />
            <TouchableOpacity
              onPress={changeHiddenPassword}
            >
              <Svg viewBox={viewBox} style={styles.icon}>
                <Path d={d} />
              </Svg>
            </TouchableOpacity>
          </View>

          <View style={styles.fake_input}>
            <TextInput
              placeholder="Confirme a senha"
              keyboardType="default"
              placeholderTextColor={"#282832"}
              secureTextEntry={hidden}
              style={styles.inv_input}
              onChangeText={(pwd) => { verifyPassword(pwd) }}
            />
            <TouchableOpacity
              onPress={changeHiddenPassword}
            >
              <Svg viewBox={viewBox} style={styles.icon}>
                <Path d={d} />
              </Svg>
            </TouchableOpacity>
          </View>

          <View style={styles.strong_password_div}>
            <Animated.View
              style={[barStyles.div_bar, { width: percentPasswordAnimate.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) }]}
            ></Animated.View>
          </View>

        </View>
      </View>

      <View style={styles.container_btn_login}>
        <TouchableOpacity style={[DefaultStyle.default_btn, DefaultStyle.bg_blue]}
          onPress={() => {
            navigation.navigate('Step6Register');
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
  fake_input: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 2,
    borderColor: "#282832",
    marginTop: 10,
    marginBottom: 10,
    color: '#282832',
    fontFamily: 'Itim-Regular',
    fontSize: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inv_input: {
    width: '90%'
  },
  icon: {
    width: 30,
    height: 30
  },
  strong_password_div: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 50,
    overflow: 'hidden'
  },
  container_btn_login: {
    flex: .15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Step5Register;


