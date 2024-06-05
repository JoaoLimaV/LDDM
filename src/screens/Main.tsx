import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native'
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation'
import Icons from '@icons/svgs'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'
import { ToastShow } from '@components/Toast'
import { useAlertNotLogin, userNotAuth } from '@components/Alert'

import { getToken } from '@components/AuthStorage'

import styles from '@styles/mainStyle'

interface Produto {
  id: number
  nome: string
  preco: string
  caminho_imagem: string
}

const MAX_LENGTH = 20

const truncateString = (str: string, max: number): string => {
  return str.length > max ? str.substr(0, max) + '...' : str
}

const Main: React.FC<{ navigation: any }> = ({ navigation }) => {
  const alertNotLogin = useAlertNotLogin()

  const alertUserNotAuth = userNotAuth();

  const [notLogin, setNotLogin] = React.useState<boolean>(true);

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [statusUser, setStatusUser] = useState<number>(1);

  const getProducts = async (): Promise<void> => {
    try {
      const response = await axios.get(`${process.env.API_URL}/getAllProducts`)

      const produtosData: Produto[] = response.data.produtos.map(
        (produto: any) => ({
          id: produto.id,
          nome: produto.name,
          preco: `R$ ${produto.current_price}`,
          caminho_imagem: produto.images[0],
        }),
      )

      setProdutos(produtosData)
    } catch (error) {
      console.error('Erro ao obter os produtos:', error)
      ToastShow(
        'error',
        'Erro ao obter os produtos',
        'Tente novamente mais tarde.',
      )
    }
  }

  const [img, setImg] = useState()

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
      setStatusUser(res.data.user.status)
    } catch (error) {
      console.error('Erro', error)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      getProducts()
      getPerson()

      async function checkToken() {
        console.log(await getToken())
        const token = (await getToken()) == null ? true : false
        setNotLogin(token)
      }
      checkToken()
    }, []),
  )

  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      <View style={styles.header_container}>
        <View style={styles.div_input}>
          <TouchableOpacity onPress={() => {
            if (!notLogin) {
              navigation.navigate('Settings', { img });
            } else {
              alertNotLogin()
            }
          }}
          >
            {img ? (
              <Image style={{ width: 30, height: 30 }} source={{ uri: img }} />
            ) : (
              <Icons.iconUser width={30} height={30} />
            )}
          </TouchableOpacity>

          <View style={styles.div_search}>
            <TextInput
              placeholder="Procure pelo produto"
              keyboardType="default"
              placeholderTextColor={'#282832'}
              secureTextEntry={false}
              style={[styles.styled_input, defaultStyle.text_black]}
            />
            <Icons.iconSearch width={25} height={25} color={'#282832'} />
            <TouchableOpacity></TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => {
              if (!notLogin) {
                navigation.navigate('Notify')
              } else {
                alertNotLogin()
              }
            }}
          >
            <Icons.iconNotify width={30} height={32} color={'#282832'} />
            <View style={styles.notification_text}>
              <Text style={defaultStyle.text_black}></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body_container}>
        <View style={styles.div_nav}>
          <TouchableOpacity style={styles.btn_nav}>
            <View style={{ marginBottom: 5 }}>
              <Icons.iconStar width={30} height={25} color={'#6B63FF'} />
            </View>
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>
              Favoritos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <View style={{ marginBottom: 5 }}>
              <Icons.iconTrend width={28} height={25} color={'#6B63FF'} />
            </View>
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>
              Populares
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <View style={{ marginBottom: 5 }}>
              <Icons.iconFire width={22} height={25} color={'#6B63FF'} />
            </View>
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>
              Em Alta
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav} onPress={() => {
            if (!notLogin && statusUser != 1) {
              navigation.navigate('FormProduct');
              console.log(statusUser)
            } else {
              alertUserNotAuth()
            }

          }}>
            <View style={{ marginBottom: 5 }}>
              <Icons.iconHammer width={25} height={25} color={'#6B63FF'} />
            </View>
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>
              Leiloar
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.header_product}>
          <Text style={[{ fontSize: 22 }, defaultStyle.text_black]}>
            Leilões em aberto:
          </Text>

          <View style={styles.display_items}>
            <TouchableOpacity style={styles.items_style}>
              <Icons.iconFilter width={15} height={15} color={'#282832'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items_style}>
              <Icons.iconGrid width={15} height={15} color={'#282832'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items_style}>
              <Icons.iconList width={15} height={15} color={'#282832'} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scroll_product}>
          <View style={styles.body_product}>
            {produtos.map(
              (
                produto: {
                  id: number
                  nome: string
                  preco: string
                  caminho_imagem: string
                },
                index: React.Key | null | undefined,
              ) => (
                <TouchableOpacity
                  key={index}
                  style={styles.card_product}
                  onPress={() => {
                    navigation.navigate('Product', {
                      idProduct: produto.id,
                      notLogin: notLogin,
                    })
                  }}
                >
                  <View style={styles.card_top}>
                    <Text style={[{ fontSize: 12 }, defaultStyle.text_black]}>
                      1d 20h 20m 23s
                    </Text>
                    <View style={styles.div_image}>
                      <Image
                        style={styles.image_product}
                        source={{ uri: produto.caminho_imagem }}
                      />
                    </View>
                  </View>
                  <View style={styles.desc_product}>
                    <View style={styles.desc_right}>
                      <Text
                        style={[
                          { fontSize: 12 },
                          defaultStyle.text_black,
                          { marginTop: 10 },
                        ]}
                      >
                        {truncateString(produto.nome, MAX_LENGTH)}
                      </Text>
                      <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>
                        {produto.preco}
                      </Text>
                    </View>
                    <Icons.iconStar
                      width={30}
                      height={25}
                      color={'#6B63FF'}
                      isFilled={false}
                    />
                  </View>
                </TouchableOpacity>
              ),
            )}
          </View>
        </ScrollView>
      </View>
      {/* <HeaderNavigation backScreen={'Home'} title='' icon={{ viewBox: '', fill: '', d: '' }} /> */}
    </Pressable>
  )
}

export default Main
