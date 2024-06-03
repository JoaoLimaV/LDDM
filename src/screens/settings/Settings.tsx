import React, { useEffect, useState } from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle';
import HeaderNavigation from '@components/HeaderNavigation';
import Icons from '@icons/svgs';
import { getToken } from '@components/AuthStorage'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native';

import styles from '@styles/settingStyle'

function Settings({ navigation }: any): React.JSX.Element {

    const [img, setImg] = useState('')

    const getPerson = async (): Promise<void> => {
        const token = await getToken()
    
        try {
          const res = await axios.get(`${process.env.API_URL}/getUser`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          console.log(res.data.user)
          setImg(res.data.user.perfil_url)
        } catch (error) {
          console.error('Erro', error)
        }
      }

      useEffect(() => {
        getPerson()
      }, [])

      useFocusEffect(
        React.useCallback(() => {
          getPerson();
        }, [])
      );

    return (
        <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
            <HeaderNavigation backScreen={'Main'} title='' icon={{ viewBox: '', fill: '', d: '' }} />
            <View style={styles.main_container}>
                <View style={styles.content_container}>
                    <View style={styles.container_img}>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 100, height: 90 }}
                                source={{ uri: img }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.div_nav}>
                        <TouchableOpacity style={styles.btn_top} onPress={() => { navigation.navigate('UserConfig')}}>
                            <View style={{ marginBottom: 10 }}>
                                <Icons.iconGear width={40} height={40} color={"#282832"} />
                            </View>
                            <Text style={[styles.text_top, defaultStyle.text_black]}>Minha Conta</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn_top}>
                            <View style={{ marginBottom: 10 }}>
                                <Icons.iconCart width={40} height={40} color={"#282832"} />
                            </View>
                            <Text style={[styles.text_top, defaultStyle.text_black]}>Histórico de compras</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn_top} onPress={() => {navigation.navigate('TermoLeilao')}}>
                            <View style={{ marginBottom: 10 }}>
                                <Icons.iconCard width={40} height={40} color={"#282832"} />
                            </View>
                            <Text style={[styles.text_top, defaultStyle.text_black]}>Se torna Leiloeiro</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content_container}>
                    <TouchableOpacity>
                        <View style={styles.btn_bot}>
                            <Icons.iconStar width={45} height={45} color={"#282832"} />
                            <Text style={[styles.text_bot, defaultStyle.text_black]}>Favoritos</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.btn_bot}>
                            <Icons.iconHammer width={45} height={45} color={"#282832"} />
                            <Text style={[styles.text_bot, defaultStyle.text_black]}>Meus Lances</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.btn_bot}>
                            <Icons.iconCash width={45} height={45} color={"#282832"} />
                            <Text style={[styles.text_bot, defaultStyle.text_black]}>Meus Itens em leilão</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.btn_bot}>
                            <Icons.iconQuestion width={45} height={45} color={"#282832"} />
                            <Text style={[styles.text_bot, defaultStyle.text_black]}>Dúvidas frequentes</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.btn_bot}>
                            <Icons.iconCard  width={45} height={45} color={"#282832"} />
                            <Text style={[styles.text_bot, defaultStyle.text_black]}>Meus cartões</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.btn_bot}>
                            <Icons.iconBalance width={45} height={45} color={"#282832"} />
                            <Text style={[styles.text_bot, defaultStyle.text_black]}>Regras</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container_btn_exit}>
                <TouchableOpacity style={styles.btn_exit}>
                    <Text style={[defaultStyle.btn_text, defaultStyle.text_red]}> Sair </Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
}

export default Settings;


