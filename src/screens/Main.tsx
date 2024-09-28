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
import {
  useAlertNotLogin,
  userNotAuth,
  userCompleteCad,
} from '@components/Alert'

import { getToken } from '@components/AuthStorage'

import styles from '@styles/mainStyle'
import contarRegressivamente from '../../assets/functions/contarRegressivamente'
import Card from '@components/Card'

interface Produto {
  id: number
  nome: string
  preco: string
  caminho_imagem: string
  end_at: string
}

const MAX_LENGTH = 20

const truncateString = (str: string, max: number): string => {
  return str.length > max ? str.substr(0, max) + '...' : str
}

const Main: React.FC<{ navigation: any }> = ({ navigation }) => {
  const alertNotLogin = useAlertNotLogin()
  const alertUserCompleteCad = userCompleteCad()
  const alertUserNotAuth = userNotAuth()

  const [notLogin, setNotLogin] = React.useState<boolean>(true)

  const [produtos, setProdutos] = useState<Produto[]>([])
  const [statusUser, setStatusUser] = useState<number>(1)

  let [dateNow, setDateNow] = React.useState<any>({})

  const getProducts = async (): Promise<void> => {
    try {
      const response = await axios.get(`${process.env.API_URL}/product`)

      const produtosData: Produto[] = response.data.produtos.map(
        (produto: any) => ({
          id: produto.id,
          nome: produto.name,
          preco: `R$ ${produto.current_price}`,
          caminho_imagem: produto.images[0],
          end_at: produto.end_at,
        }),
      )
      setProdutos(produtosData)
      setDateNow(response.data.now)
    } catch (error) {
      console.error('Erro ao obter os produtos:', error)
      ToastShow(
        'error',
        'Erro ao obter os produtos',
        'Tente novamente mais tarde.',
      )
    }
  }

  const [img, setImg] = useState(
    'https://cdn-icons-png.flaticon.com/512/6681/6681204.png',
  )

  const getPerson = async (): Promise<void> => {
    const token = await getToken()

    try {
      const res = await axios.get(`${process.env.API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setImg(res.data.user.perfil_url)
      setStatusUser(res.data.user.status)
    } catch (error) {
      console.error('Erro', error)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      async function checkToken() {
        const token = (await getToken()) == null ? true : false
        setNotLogin(token)

        if (token != true) {
          getPerson()
        }
      }
      getProducts()
      checkToken()
    }, []),
  )

  return (
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
      <View style={styles.header_container}>
        <View style={styles.div_input}>
          <TouchableOpacity
            onPress={() => {
              if (!notLogin) {
                navigation.navigate('Settings', { img })
              } else {
                alertNotLogin()
              }
            }}
          >
            {img ? (
              <Image
                style={{ width: 30, height: 30, borderRadius: 20 }}
                source={{ uri: img }}
              />
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

          <TouchableOpacity
            style={styles.btn_nav}
            onPress={() => {
              if (!notLogin && statusUser == 2) {
                navigation.navigate('FormProduct')
              } else if (notLogin) {
                alertNotLogin()
              } else if (statusUser == 0) {
                alertUserCompleteCad()
              } else {
                alertUserNotAuth()
              }
            }}
          >
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
          {produtos.map((product) => (
            <Card
              notLogin={notLogin}
              statusUser={statusUser}
              key={product.id}
              id={product.id}
              name={product.nome}
              images={product.caminho_imagem}
              currentPrice={product.preco}
              dateNow={dateNow}
              endAt={product.end_at}
            />

          ))}
          </View>
        </ScrollView>
      </View>
      {/* <HeaderNavigation backScreen={'Home'} title='' icon={{ viewBox: '', fill: '', d: '' }} /> */}
    </Pressable>
  )
}

export default Main
