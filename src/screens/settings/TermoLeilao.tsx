import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import { RadioButton } from 'react-native-paper';
import HeaderNavigation from '@components/HeaderNavigation';
import Toast from 'react-native-toast-message';
import { ToastShow, styleToast } from '@components/Toast'

import styles from '@styles/step6Style'
import axios from 'axios';
import Loading from '@components/Loading';

function TermoLeilao({ navigation, route }: any): React.JSX.Element {


  const [checked, setChecked] = useState('reject');
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={defaultStyle.main_container}>
      {isLoading && <Loading />}
      <HeaderNavigation
        backScreen={'Settings'}
        title=""
        icon={{ viewBox: '', fill: '', d: '' }}
      />
    
      <Text style={[styles.text_principal, defaultStyle.text_black]}> Termos de Uso </Text>
      <ScrollView style={styles.scroll_view}>
        <Text style={[styles.title_scroll, defaultStyle.text_black]}> Uso de dados </Text>
    

        <Text style={[styles.text_scroll, defaultStyle.text_black]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <Text style={[styles.title_scroll, defaultStyle.text_black]}> Uso de dados </Text>

        <Text style={[styles.text_scroll, defaultStyle.text_black]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <Text style={[styles.title_scroll, defaultStyle.text_black]}> Uso de dados </Text>

        <Text style={[styles.text_scroll, defaultStyle.text_black]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <Text style={[styles.title_scroll, defaultStyle.text_black]}> Uso de dados </Text>

        <Text style={[styles.text_scroll, defaultStyle.text_black]}>
          Lorem Ipsum is simply dummy text omy text omy text omy text of the printing and typesetting industry. Lorem Ipsum hions of Lorem Ipsum.
        </Text>
      </ScrollView>

      <View style={styles.container_btn_login}>

        <View style={styles.div_radio_btn}>
          <RadioButton
            value="accept"
            status={checked === 'accept' ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked('accept');
              setDisabled(false)
            }}
            color={'#6B63FF'}
          />
          <Text style={[styles.text_radio_btn, defaultStyle.text_black]}> Declaro que li e concordo com os Termos de Uso do BidCard </Text>
        </View>

        <View style={styles.div_buttons}>
          <TouchableOpacity style={[styles.btn, defaultStyle.bg_gray]}
            onPress={() => {
              navigation.navigate('Settings');
            }}
          >
            <Text style={[defaultStyle.btn_text, defaultStyle.text_black]}> Rejeitar </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled]}
            onPress={() => {
                navigation.navigate('Settings');
              }}
            disabled={isDisabled}
          >
            <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Aceitar </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Toast config={styleToast} />

    </View>
  );
}

export default TermoLeilao;


