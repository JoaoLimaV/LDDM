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
import RNPickerSelect from 'react-native-picker-select'
import { selectCss } from '@styles/formProductStyle'
import Accordion from '@components/Accordion'

function UserConfig({ navigation }: any): React.JSX.Element {
  let [img, setImg] = useState('')
  let [name, setName] = useState('')
  let [CPF, setCPF] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')

  let [cep, setCep] = useState('')

  let [enderecos, setEnderecos] = useState<any[]>([])
  const [grading, setGrading] = useState(Number)

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

  const updatedFields: any = {}

  const [file, setFile] = useState<any>(null)

  const getPerson = async (): Promise<void> => {
    const token = await getToken()
    try {
      const res = await axios.get(`${process.env.API_URL}/user`, {
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
        setEnderecos(res.data.user.addresses)
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
        .put(`${process.env.API_URL}/user`, updatedFields, config)
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

  const chooseTypePickImage = async () => {
    console.log(enderecos)
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

  const viaCep = async (cep: string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const data = response.data
      if (!data.erro) {
        setRua(data.logradouro)
        setCidade(data.localidade)
        setBairro(data.bairro)
        setEstado(data.uf)
      } else {
        ToastShow('error', 'CEP Inválido', 'O CEP informado não foi encontrado')
      }
    } catch (error) {
      console.error('Erro ao buscar o endereço:', error)
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
          <TouchableOpacity style={styles.icons} onPress={chooseTypePickImage}>
            <Image style={styles.profile} source={{ uri: img ? img : 'https://cdn-icons-png.flaticon.com/512/6681/6681204.png' }} />
          </TouchableOpacity>
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
              style={[
                defaultStyle.defaul_input,
                CPF == null,
              ]}
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
          <View style={styles.flex}>
            <View style={styles.div_radio_btn}>
              <RNPickerSelect
                placeholder={{
                  label: 'Selecione o CEP',
                  value: 0,
                }}
                onValueChange={(value) => {
                  if (enderecos[0]) {
                    setGrading(value)
                    viaCep(enderecos[value].cep)
                  }
                }}
                items={enderecos.map((end: any, index: number) => ({
                  label: end.cep.replace(/^(\d{5})(\d{3})$/, '$1-$2'), // Formatar o CEP
                  value: index,
                }))}
                style={selectCss}
              />
            </View>

            <View style={styles.border}>
              <TouchableOpacity>
                <ModalAddress getPerson={getPerson} />
              </TouchableOpacity>
            </View>
          </View>

          {enderecos.length > 0 ? (
            <>
              <View style={styles.rua}>
                <Text style={[defaultStyle.text_black, styles.textInput]}>
                  Rua:
                </Text>
                <TextInput
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
                      value={enderecos[grading].number.toString()}
                      onChangeText={setNumero}
                      placeholder="Ex: 11"
                      keyboardType="default"
                      placeholderTextColor={'#D9D9D9'}
                      secureTextEntry={false}
                      style={[defaultStyle.defaul_input]}
                      editable={false}
                    />
                  </View>
                </View>
              </View>
            </>
          ) : (
            <Text style={[styles.not_history_bid, defaultStyle.text_black]}>
              Não há CEP cadastrado
            </Text>
          )}
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
