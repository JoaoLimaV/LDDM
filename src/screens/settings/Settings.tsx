import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Keyboard,
} from 'react-native'
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation'
import Icons from '@icons/svgs'
import { deleteToken } from '@components/AuthStorage'
import Spinner from 'react-native-loading-spinner-overlay'
import axios from 'axios'
import { getToken } from '@components/AuthStorage'
import { useFocusEffect } from '@react-navigation/native'
import { userCompleteCad, userNotAuth } from '@components/Alert'

import styles from '@styles/settingStyle'

function Settings({ navigation, route }: any): React.JSX.Element {
  const [img, setImg] = useState()
  const [status, setStatus] = useState()

  const alerUserCompleteCad = userCompleteCad();
  const alerUserNotAuth = userNotAuth();

  const getPerson = async (): Promise<void> => {
    const token = await getToken()

    try {
      const res = await axios.get(`${process.env.API_URL}/getUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setImg(res.data.user.perfil_url)
      setStatus(res.data.user.status)
    } catch (error) {
      console.error('Erro', error)
    }
  }

  // Modal

  const [openModal, setOpenModal] = React.useState<boolean>(false)

  const opendImgModal = async () => {
    setOpenModal(true)
  }

  const closeImgModal = async () => {
    setOpenModal(false)
  }

  useFocusEffect(
    React.useCallback(() => {
      getPerson()
    }, []),
  )

  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      <HeaderNavigation
        backScreen={'Main'}
        title=""
        icon={{ viewBox: '', fill: '', d: '' }}
      />
      <View style={styles.main_container}>
        <View style={styles.content_container}>
          <View style={styles.container_img}>
            <TouchableOpacity>
              {img ? (
                <Image
                  style={{ width: 90, height: 90, borderRadius: 50 }}
                  source={{ uri: img }}
                />
              ) : (
                <Icons.iconUser width={70} height={80} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.div_nav}>
            <TouchableOpacity
              style={styles.btn_top}
              onPress={() => {
                navigation.navigate('UserConfig')
              }}
            >
              <View style={{ marginBottom: 10 }}>
                <Icons.iconGear width={40} height={40} color={'#282832'} />
              </View>
              <Text style={[styles.text_top, defaultStyle.text_black]}>
                Minha Conta
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn_top}>
              <View style={{ marginBottom: 10 }}>
                <Icons.iconCart width={40} height={40} color={'#282832'} />
              </View>
              <Text style={[styles.text_top, defaultStyle.text_black]}>
                Histórico de compras
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn_top}
              onPress={() => {
                if (status == 0) {
                  alerUserCompleteCad()
                } else {
                  navigation.navigate('TermoLeilao')
                }
              }}
            >
              <View style={{ marginBottom: 10 }}>
                <Icons.iconMoney width={40} height={40} color={'#282832'} />
              </View>
              <Text style={[styles.text_top, defaultStyle.text_black]}>
                Se torna Leiloeiro
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content_container}>
          <TouchableOpacity>
            <View style={styles.btn_bot}>
              <Icons.iconStar width={45} height={45} color={'#282832'} />
              <Text style={[styles.text_bot, defaultStyle.text_black]}>
                Favoritos
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MeusLances')
            }}
          >
            <View style={styles.btn_bot}>
              <Icons.iconHammer width={45} height={45} color={'#282832'} />
              <Text style={[styles.text_bot, defaultStyle.text_black]}>
                Meus Lances
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (status != 2) {
                alerUserNotAuth()
              }
            }}>
            <View style={styles.btn_bot}>
              <Icons.iconCash width={45} height={45} color={'#282832'} />
              <Text style={[styles.text_bot, defaultStyle.text_black]}>
                Meus Itens em leilão
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.btn_bot}>
              <Icons.iconQuestion width={45} height={45} color={'#282832'} />
              <Text style={[styles.text_bot, defaultStyle.text_black]}>
                Dúvidas frequentes
              </Text>
            </View>
          </TouchableOpacity>

          {/* <TouchableOpacity>
            <View style={styles.btn_bot}>
              <Icons.iconCard width={45} height={45} color={'#282832'} />
              <Text style={[styles.text_bot, defaultStyle.text_black]}>
                Meus cartões
              </Text>
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity>
            <View style={styles.btn_bot}>
              <Icons.iconBalance width={45} height={45} color={'#282832'} />
              <Text style={[styles.text_bot, defaultStyle.text_black]}>
                Regras
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container_btn_exit}>
        <TouchableOpacity
          style={styles.btn_exit}
          onPress={async () => {
            opendImgModal()
            let result = await deleteToken()
            if (result == 'Removed') {
              navigation.navigate('Home')
            }
          }}
        >
          <Text style={[defaultStyle.btn_text, defaultStyle.text_red]}>
            {' '}
            Sair{' '}
          </Text>
        </TouchableOpacity>
      </View>

      {openModal && (
        <View style={[defaultStyle.modal]}>
          <Spinner visible={true} />
        </View>
      )}
    </Pressable>
  )
}

export default Settings
