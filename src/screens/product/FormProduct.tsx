import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from 'react-native'
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation'
import { formProductStyle as styles, selectCss, formProductStyle } from '@styles/formProductStyle'
import Icons from '@icons/svgs'
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker'
import RNPickerSelect from 'react-native-picker-select'
import axios from 'axios'
import { getToken } from '@components/AuthStorage'
import Toast from 'react-native-toast-message'
import { ToastShow, styleToast } from '@components/Toast'
import { useNavigation } from '@react-navigation/native'

function FormProduct(): React.JSX.Element {
  const navigation = useNavigation()

  const [inputValues, setInputValues] = React.useState({
    nome: '',
    desc: '',
    grading: '',
    price: '',
    final_bid_price: '',
    duration: '',
  })
  const [isDisabled, setDisabled] = React.useState<boolean>(true)

  const handleInputChange = (name: string, value: string) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    })
  }

  const [file, setFile] = React.useState<any>(null)
  const [openModal, setOpenModal] = React.useState<boolean>(false)

  const chooseTypePickImage = async () => {
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
        onDismiss: () => {},
      },
    )
  }

  const pickImageFromGalery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: 3,
      includeBase64: true,
    }

    const result = await launchImageLibrary(options)

    if (result?.assets) {
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
      setFile(result.assets[0])
    }
  }

  const clearFile = async () => {
    setFile(null)
  }

  const opendImgModal = async () => {
    setOpenModal(true)
  }

  const closeImgModal = async () => {
    setOpenModal(false)
  }

  React.useEffect(() => {
    if (
      inputValues.nome != '' &&
      inputValues.desc != '' &&
      inputValues.grading != '' &&
      inputValues.price != '' &&
      inputValues.final_bid_price != '' &&
      inputValues.duration != '' &&
      file
    ) {
      setDisabled(false)
      return
    }
    setDisabled(true)
  }, [chooseTypePickImage, handleInputChange])

  const saveProduct = async () => {
    const token = await getToken()

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }

    let json = {
      name: inputValues.nome,
      desc: inputValues.desc,
      grading: inputValues.grading,
      start_price: parseInt(inputValues.price),
      final_bid_price: parseInt(inputValues.final_bid_price),
      imageBase64: file.base64,
      daysToEnd: parseInt(inputValues.duration),
    }

    axios
      .post(`${process.env.API_URL}/product`, json, config)
      .then((response) => {
        ToastShow(
          'success',
          'Produto Cadastrado com sucesso',
          'Você será direcionado para HomePage.',
        )
        setTimeout(function () {
          // @ts-ignore
          navigation.navigate('Main')
        }, 2000)
      })
      .catch((error) => {
        ToastShow('error', 'ERRO', 'Erro ao Enviar Produto')
      })
  }

  return (
    <View style={defaultStyle.main_container}>
      <HeaderNavigation
        backScreen={'Main'}
        title=""
        icon={{ viewBox: '', fill: '', d: '' }}
      />

      <ScrollView style={styles.scroll_view}>
        <Text style={[defaultStyle.text_black, styles.title]}>
          {' '}
          Upload de Imagem{' '}
        </Text>

        <View style={styles.div_file_Upload}>
          <TouchableOpacity
            style={{ alignItems: 'center', justifyContent: 'center' }}
            onPress={chooseTypePickImage}
          >
            <Text style={[defaultStyle.text_black]}> Upload de Imagem </Text>
            <Icons.iconUploadCloud width={80} height={80} color="#6B63FF" />
          </TouchableOpacity>

          {file && (
            <View style={styles.div_files_uploaded}>
              <View style={styles.file_info_div}>
                <Icons.iconUploadImage width={33} height={33} color="#6B63FF" />
                <View style={styles.file_text_div}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.text_file, defaultStyle.text_black]}
                  >
                    {' '}
                    {file.fileName}{' '}
                  </Text>
                  <Text style={[styles.text_file, defaultStyle.text_blue]}>
                    {' '}
                    {file.fileSize} KB{' '}
                  </Text>
                </View>
              </View>
              <View style={styles.file_btn_div}>
                <TouchableOpacity
                  style={[styles.btn_file]}
                  onPress={opendImgModal}
                >
                  <Icons.iconEye width={18} height={18} color="#282832" />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn_file]} onPress={clearFile}>
                  <Icons.iconClose width={14} height={14} color="#BA090B" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        <View style={styles.div_input}>
          <TextInput
            placeholder="Nome do Produto"
            keyboardType="default"
            placeholderTextColor={'#282832'}
            secureTextEntry={false}
            style={[defaultStyle.defaul_input]}
            value={inputValues.nome}
            onChangeText={(value) => handleInputChange('nome', value)}
          />
          <Text style={defaultStyle.errorTextInput}> </Text>

          <TextInput
            placeholder="Descrição do Produto"
            keyboardType="default"
            placeholderTextColor={'#282832'}
            secureTextEntry={false}
            style={[defaultStyle.defaul_input, styles.inputMultiline]}
            value={inputValues.desc}
            onChangeText={(value) => handleInputChange('desc', value)}
            multiline={true}
            textAlignVertical="top"
          />

          <Text style={defaultStyle.errorTextInput}> </Text>

          <View style={styles.div_radio_btn}>
            <RNPickerSelect
              placeholder={{
                label: 'Selecione a condição do seu produto',
                value: '',
              }}
              onValueChange={(value) => {
                handleInputChange('grading', value)
              }}
              items={[
                { label: 'Novo', value: 'novo' },
                { label: 'Semi-novo', value: 'semi-novo' },
                { label: 'Usada', value: 'usada' },
                { label: 'Velha', value: 'velha' },
              ]}
              style={selectCss}
            />
          </View>

          <Text style={defaultStyle.errorTextInput}> </Text>

          <TextInput
            placeholder="Preço Inicial"
            keyboardType="numeric"
            placeholderTextColor={'#282832'}
            secureTextEntry={false}
            style={[defaultStyle.defaul_input]}
            value={inputValues.price}
            onChangeText={(value) =>
              handleInputChange('price', value.replace(/\D/g, ''))
            }
          />

          {inputValues.price ? (
            <Text style={formProductStyle.textPorcent}>
              10% de {inputValues.price} ={' '}
              {parseInt(inputValues.price) / 10}
            </Text>
          ) : <Text style={defaultStyle.errorTextInput}> </Text>}

          <TextInput
            placeholder="Preço de Arremate"
            keyboardType="numeric"
            placeholderTextColor={'#282832'}
            secureTextEntry={false}
            style={[defaultStyle.defaul_input]}
            value={inputValues.final_bid_price}
            onChangeText={(value) =>
              handleInputChange('final_bid_price', value.replace(/\D/g, ''))
            }
          />

          {inputValues.final_bid_price ? (
            <>
            <Text style={formProductStyle.textPorcent}>
              10% de {inputValues.final_bid_price} ={' '}
              {parseInt(inputValues.final_bid_price) / 10}
            </Text>
            </>
          ) : <Text style={defaultStyle.errorTextInput}> </Text>}

          <TextInput
            placeholder="Duração do Leilão em Dias (No maximo 30)"
            keyboardType="numeric"
            placeholderTextColor={'#282832'}
            secureTextEntry={false}
            style={[defaultStyle.defaul_input]}
            value={inputValues.duration}
            onChangeText={(value) => {
              if (parseInt(value) >= 31) {
                ToastShow('error', 'Erro', 'No maximo 30 dias')
              } else if (parseInt(value) == 0) {
                ToastShow('error', 'Erro', 'No minino 1 dia')
              } else {
                handleInputChange('duration', value.replace(/\D/g, ''))
              }
            }}
          />

          <Text style={defaultStyle.errorTextInput}> </Text>
        </View>

        <TouchableOpacity
          style={[
            defaultStyle.default_btn,
            defaultStyle.bg_blue,
            { marginBottom: 50 },
            isDisabled && defaultStyle.disabled,
          ]}
          onPress={() => {
            saveProduct()
          }}
          disabled={isDisabled}
        >
          <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}>
            {' '}
            Avançar{' '}
          </Text>
        </TouchableOpacity>
      </ScrollView>
      {file && openModal && (
        <TouchableOpacity style={[defaultStyle.modal]} onPress={closeImgModal}>
          <View
            style={{
              width: 400,
              height: 400,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={{ uri: file.uri }}
              style={{ width: '90%', height: '90%', resizeMode: 'contain' }}
            />
          </View>
        </TouchableOpacity>
      )}

      <Toast config={styleToast} />
    </View>
  )
}

export default FormProduct
