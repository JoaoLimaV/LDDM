import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native'
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation'
import Icons from '@icons/svgs'
import axios from 'axios'
import styles from '@styles/userConfig'
import { getToken } from '@components/AuthStorage'
import Toast from 'react-native-toast-message'
import { ToastShow, styleToast } from '@components/Toast'
import { TextInputMask } from 'react-native-masked-text'
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'
import ModalAddress from './ModalAddress'

function UserConfig({ navigation }: any): React.JSX.Element {
  let [img, setImg] = useState('')
  let [name, setName] = useState('')
  let [CPF, setCPF] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')

  let [cep, setCep] = useState('')

  let [rua, setRua] = useState('')
  let [cidade, setCidade] = useState('')
  let [bairro, setBairro] = useState('')
  let [estado, setEstado] = useState('')
  let [numero, setNumero] = useState('')

  let [originalData, setOriginalData] = useState({
    name: null,
    perfil_url: null,
    cpf: null,
    email: null,
    phone: null,
  })

  // Objeto para armazenar os campos modificados
  const updatedFields: any = {}

  const [file, setFile] = React.useState<any>(null)

  const getPerson = async (): Promise<void> => {
    const token = await getToken()
    try {
      const res = await axios.get(`${process.env.API_URL}/getUser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setOriginalData(res.data.user)

      setImg(res.data.user.perfil_url)
      setName(res.data.user.name)
      setCPF(res.data.user.cpf)
      setEmail(res.data.user.email)
      setPhone(res.data.user.phone)
      if (res.data.user.addresses[0]) {
        setCep(res.data.user.addresses[0].cep)
        setRua(res.data.user.addresses[0].complement)
        setNumero(res.data.user.addresses[0].number.toString())
      } else {
        ToastShow(
          'info',
          'Dados Incompletos',
          'Adicione CPF e Endereço para finalizar o seu cadastro e ter acesso total.',
        )
      }
    } catch (error) {
      console.error('Erro', error)
    }
  }

  const putPerson = async (): Promise<void> => {
    // Comparar e adicionar os campos modificados ao objeto updatedFields
    if (name !== originalData.name) updatedFields.name = name
    if (CPF !== originalData.cpf) updatedFields.cpf = CPF
    if (email !== originalData.email) updatedFields.email = email
    if (phone !== originalData.phone) updatedFields.phone = phone
    if (file) updatedFields.perfil_url = file.base64

    const token = await getToken()
    if (Object.keys(updatedFields).length > 0) {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
      axios
        .put(`${process.env.API_URL}/updateUser`, updatedFields, config)
        .then((response) => {
          ToastShow('success', 'Sucesso', 'Informações alteradas')
          setTimeout(function () { }, 2000)
        })
        .catch((error) => {
          ToastShow('error', 'ERRO', 'DESCUBRA FIO')
        })
    } else {
      ToastShow('error', 'ERRO', 'Voce não alterou nenhum campo')
    }
  }

  const postAddress = async (): Promise<void> => {
    const token = await getToken()
    try {
      const res = await axios.post(
        `${process.env.API_URL}/postAddress`,
        {
          cep: cep,
          complement: rua,
          number: numero,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      ToastShow(
        'success',
        'Dados Atualizados',
        'Seus dados foram atualizados com sucesso. ',
      )
    } catch (error) {
      ToastShow(
        'error',
        'Erro ao Atualizados dados',
        'Seus dados não foram atualizados',
      )
      console.error('Erro', error)
    }
  }

  const chooseTypePickImage = async () => {
    console.log(CPF)
    Alert.alert(
      'Selecione',
      'Selecione como deseja selecionar a foto',
      [
        {
          text: 'Galeria',
          onPress: () => {
            pickImageFromGalery()
          },
        },
        {
          text: 'Câmera',
          onPress: () => {
            pickImageFromCamera()
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: () => { },
      },
    )
  }

  const pickImageFromGalery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: true,
    }

    const result = await launchImageLibrary(options)

    if (result?.assets) {
      setImg(result.assets[0].uri!)
      setFile(result.assets[0])
    }
  }

  const pickImageFromCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: true,
      saveToPhotos: false,
      cameraType: 'back',
      quality: 1,
    }

    const result = await launchCamera(options)

    if (result?.assets) {
      setImg(result.assets[0].uri!)
      setFile(result.assets[0])
    }
  }

  useEffect(() => {
    getPerson()
  }, [])

  return (
    <View style={defaultStyle.main_container}>
      <HeaderNavigation
        backScreen={'Settings'}
        title=""
        icon={{ viewBox: '', fill: '', d: '' }}
      />

      <ScrollView style={styles.scroolView}>
        <View style={styles.header}>
          <Text style={[styles.title, defaultStyle.text_black]}>
            Configuração de Usuario
          </Text>
          <View style={styles.icons}>
            {img ? (
              <Image style={styles.profile} source={{ uri: img }} />
            ) : (
              <Icons.iconUser width={100} height={100} color="#282832" />
            )}
            <TouchableOpacity onPress={chooseTypePickImage}>
              <View style={styles.pen}>
                <Icons.iconPen width={17} height={17} color="#282832" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputs}>
          <View>
            <Text style={[defaultStyle.text_black, styles.textInput]}>
              Nome:
            </Text>
            <TextInput
              id="nome"
              value={name}
              onChangeText={setName}
              placeholder="Ex: Bind Tecnology LTDA."
              keyboardType="default"
              placeholderTextColor={'#D9D9D9'}
              secureTextEntry={false}
              style={[defaultStyle.defaul_input]}
            />
          </View>
          <View>
            <Text style={[defaultStyle.text_black, styles.textInput]}>
              CPF:
            </Text>
            <TextInputMask
              type={'cpf'}
              value={CPF}
              onChangeText={(text) => {
                setCPF(text.replace(/\D/g, ''))
              }}
              keyboardType="numeric"
              placeholderTextColor={'#D9D9D9'}
              secureTextEntry={false}
              style={[defaultStyle.defaul_input, CPF == null && { borderColor: 'rgba(235, 201, 17, 0.8)' }]}
            />
          </View>
          <View>
            <Text style={[defaultStyle.text_black, styles.textInput]}>
              E-mail:
            </Text>
            <TextInput
              id="email"
              value={email}
              onChangeText={setEmail}
              placeholder="Ex: bindtecnology00@gmail.com"
              keyboardType="default"
              placeholderTextColor={'#D9D9D9'}
              secureTextEntry={false}
              style={[defaultStyle.defaul_input]}
            />
          </View>
          <View>
            <Text style={[defaultStyle.text_black, styles.textInput]}>
              Telefone:
            </Text>
            <TextInputMask
              id="phone"
              value={phone}
              type={'cel-phone'}
              onChangeText={(text) => {
                setPhone(text.replace(/\D/g, ''))
              }}
              placeholder="Ex: (11) 99999-9999"
              keyboardType="numeric"
              placeholderTextColor={'#D9D9D9'}
              secureTextEntry={false}
              style={[defaultStyle.defaul_input]}
            />
          </View>
        </View>

        <View style={styles.endereco}>
          <View style={styles.cep}>
            <Text style={[defaultStyle.text_black, styles.textInput]}>
              CEP:
            </Text>
            <View style={styles.flex}>
              <TextInputMask
                id="cep"
                value={cep}
                type={'custom'}
                options={{
                  mask: '99999-999',
                }}
                onChangeText={setCep}
                placeholder="11111-111"
                keyboardType="numeric"
                placeholderTextColor={'#D9D9D9'}
                secureTextEntry={false}
                style={[defaultStyle.defaul_input, cep == '' && { borderColor: 'rgba(235, 201, 17, 0.8)' }]}
                maxLength={9}
              />
              <View style={styles.border}>
                <TouchableOpacity>
                  <ModalAddress />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.rua}>
            <Text style={[defaultStyle.text_black, styles.textInput]}>
              Rua:
            </Text>
            <TextInput
              id="rua"
              value={rua}
              onChangeText={setRua}
              placeholder="Ex: Rua Brasil"
              keyboardType="default"
              placeholderTextColor={'#D9D9D9'}
              secureTextEntry={false}
              style={[defaultStyle.defaul_input]}
              editable={false}
            />
          </View>

          <View style={styles.flexEndereco}>
            <View style={styles.collunm1}>
              <View>
                <Text style={[defaultStyle.text_black, styles.textInput]}>
                  Cidade:
                </Text>
                <TextInput
                  id="city"
                  value={cidade}
                  onChangeText={setCidade}
                  placeholder="Ex: Osasco"
                  keyboardType="default"
                  placeholderTextColor={'#D9D9D9'}
                  secureTextEntry={false}
                  style={[defaultStyle.defaul_input]}
                  editable={false}
                />
              </View>
              <View>
                <Text style={[defaultStyle.text_black, styles.textInput]}>
                  Bairro:
                </Text>
                <TextInput
                  id="bairro"
                  value={bairro}
                  onChangeText={setBairro}
                  placeholder="Ex: Jd.Aeroporto"
                  keyboardType="default"
                  placeholderTextColor={'#D9D9D9'}
                  secureTextEntry={false}
                  style={[defaultStyle.defaul_input]}
                  editable={false}
                />
              </View>
            </View>
            <View style={styles.collunm2}>
              <View>
                <Text style={[defaultStyle.text_black, styles.textInput]}>
                  Estado:
                </Text>
                <TextInput
                  id="stade"
                  value={estado}
                  onChangeText={setEstado}
                  placeholder="Ex: SP"
                  keyboardType="default"
                  placeholderTextColor={'#D9D9D9'}
                  secureTextEntry={false}
                  style={[defaultStyle.defaul_input]}
                  editable={false}
                />
              </View>

              <View>
                <Text style={[defaultStyle.text_black, styles.textInput]}>
                  Número:
                </Text>
                <TextInput
                  id="number"
                  value={numero}
                  onChangeText={setNumero}
                  placeholder="Ex: 11"
                  keyboardType="default"
                  placeholderTextColor={'#D9D9D9'}
                  secureTextEntry={false}
                  style={[defaultStyle.defaul_input]}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Toast config={styleToast} />

      <View style={styles.finish}>
        <TouchableOpacity onPress={putPerson}>
          <View style={[styles.btnFinish, defaultStyle.bg_blue]}>
            <Text style={[defaultStyle.text_white]}>Finalizar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserConfig
