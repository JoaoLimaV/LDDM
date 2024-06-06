import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native'
import defaultStyle from '@components/DefaultStyle'

import styles from '@styles/userConfig'
import Icons from '@icons/svgs'
import { TextInputMask } from 'react-native-masked-text'
import { getToken } from '@components/AuthStorage'
import axios from 'axios'
import { ToastShow } from '@components/Toast'

export default function ({getPerson}: any) {
  const [visible, setVisible] = useState(false)
  const [isDisabled, setDisabled] = React.useState<boolean>(true);

  const handleClose = () => {
    setVisible(false)
  }

  let [cep, setCep] = useState('')

  let [rua, setRua] = useState('')
  let [cidade, setCidade] = useState('')
  let [bairro, setBairro] = useState('')
  let [estado, setEstado] = useState('')
  let [numero, setNumero] = useState('')

  const viaCep = async (cep:string) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const data = response.data
      if (!data.erro) {
        setRua(data.logradouro)
        setCidade(data.localidade)
        setBairro(data.bairro)
        setEstado(data.uf)
      } else {
        ToastShow("error", "CEP Inválido", 'O CEP informado não foi encontrado')
      }
    } catch (error) {
      console.error('Erro ao buscar o endereço:', error)
    }
  }

  const postAddress = async () => {
    let json = {
      cep: cep,
      number: Number(numero),
      complement: rua,
      reference: "Tira isso"
    }
  
    const token = await getToken();
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    try {
      const response = await axios.post(`${process.env.API_URL}/createAddress`, json, config);
      getPerson()
      handleClose();
      ToastShow("success", "Dados Atualizados", 'Seu endereço foi atualizado');
      setTimeout(() => {
      }, 2000);
    } catch (err) {
      handleClose();
      ToastShow("error", "Erro ao atualizar endereço", 'Erro nos dados enviados. Verifique e tente novamente.');
    }
  }

    useEffect(() => {
      if (cep.length === 8) {
        viaCep(cep)
      }

      if (cep.length === 8 && numero != '') {
        setDisabled(false);
        return
      }

      setDisabled(true);
    }, [cep, numero])

  return (
    <View>
      <Modal transparent={true} visible={visible}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styleModal.container}>
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <View style={styleModal.modal}>
                <View>
                  <Text style={[defaultStyle.text_black, styleModal.title]}>
                    Adicionar Endereço
                  </Text>
                  <View style={[styles.cep, styleModal.divInput]}>
                    <Text style={[defaultStyle.text_black, styles.textInput]}>
                      CEP:
                    </Text>
                    <TextInputMask
                      value={cep}
                      type={'custom'}
                      options={{
                        mask: '99999-999',
                      }}
                      onChangeText={(text) => {
                        setCep(text.replace(/-/g, ''))
                      }}
                      placeholder="11111-111"
                      keyboardType="numeric"
                      placeholderTextColor={'#D9D9D9'}
                      secureTextEntry={false}
                      style={[styleModal.defaul_input]}
                      maxLength={9}
                      
                    />
                  </View>

                  <View style={[styles.rua, styleModal.divInput]}>
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
                      style={[styleModal.defaul_input]}
                      editable={false}
                    />
                  </View>

                  <View style={styles.flexEndereco}>
                    <View style={styleModal.collunm1}>
                      <View style={styleModal.divInput}>
                        <Text
                          style={[defaultStyle.text_black, styles.textInput]}
                        >
                          Cidade:
                        </Text>
                        <TextInput
                          value={cidade}
                          onChangeText={setCidade}
                          placeholder="Ex: Osasco"
                          keyboardType="default"
                          placeholderTextColor={'#D9D9D9'}
                          secureTextEntry={false}
                          style={[styleModal.defaul_input]}
                          editable={false}
                        />
                      </View>
                      <View style={styleModal.divInput}>
                        <Text
                          style={[defaultStyle.text_black, styles.textInput]}
                        >
                          Bairro:
                        </Text>
                        <TextInput
                          value={bairro}
                          onChangeText={setBairro}
                          placeholder="Ex: Jd.Aeroporto"
                          keyboardType="default"
                          placeholderTextColor={'#D9D9D9'}
                          secureTextEntry={false}
                          style={[styleModal.defaul_input]}
                          editable={false}
                        />
                      </View>
                    </View>
                    <View style={styleModal.collunm2}>
                      <View style={styleModal.divInput}>
                        <Text
                          style={[defaultStyle.text_black, styles.textInput]}
                        >
                          Estado:
                        </Text>
                        <TextInput
                          value={estado}
                          onChangeText={setEstado}
                          placeholder="Ex: SP"
                          keyboardType="default"
                          placeholderTextColor={'#D9D9D9'}
                          secureTextEntry={false}
                          style={[styleModal.defaul_input]}
                          editable={false}
                        />
                      </View>

                      <View style={styleModal.divInput}>
                        <Text
                          style={[defaultStyle.text_black, styles.textInput]}
                        >
                          Número:
                        </Text>
                        <TextInput
                          value={numero}
                          onChangeText={setNumero}
                          placeholder="Ex: 11"
                          keyboardType="default"
                          placeholderTextColor={'#D9D9D9'}
                          secureTextEntry={false}
                          style={[styleModal.defaul_input]}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <TouchableOpacity onPress={postAddress} disabled={isDisabled} style={isDisabled && defaultStyle.disabled}>
                  <View
                    style={[defaultStyle.default_btn, defaultStyle.bg_blue]}
                  >
                    <Text style={[defaultStyle.text_white, { fontSize: 20 }]}>
                      Adiconar
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setVisible(true)
        }}
      >
        <Icons.iconPlus width={30} height={30} color={'#282832'} />
      </TouchableOpacity>
    </View>
  )
}

const styleModal = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  modal: {
    backgroundColor: 'white',
    width: '90%',
    height: 'auto',
    borderRadius: 30,
    padding: 20,
    justifyContent: 'center',
    paddingVertical: 40,
  },

  defaul_input: {
    width: '100%',
    height: 50,
    borderRadius: 50,
    paddingLeft: 20,
    borderWidth: 2,
    borderColor: '#282832',
    color: '#282832',
    fontFamily: 'Itim-Regular',
    fontSize: 16,
  },

  collunm1: {
    flex: 2,
  },

  collunm2: {
    flex: 1,
  },

  divInput: {
    marginBottom: 10,
  },

  title: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
})
