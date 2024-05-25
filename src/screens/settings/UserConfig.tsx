import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation'
import Icons from '@icons/svgs'
import { RadioButton } from 'react-native-paper'
import axios from 'axios'
import styles from '@styles/userConfig'
import { getToken } from '@components/AuthStorage'
import Toast from 'react-native-toast-message'
import { ToastShow, styleToast } from '@components/Toast'

function UserConfig({ navigation }: any): React.JSX.Element {
  const [checked, setChecked] = useState('fisic')

  const [textName, setTextName] = useState('Nome:')
  const [textCPF, setTextCPF] = useState('CPF:')
  const [placeholder, setPlaceholder] = useState('Ex: 000.000.000-00')

  const [name, setName] = useState('')
  const [CPF, setCPF] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  // const [cep, setCep] = useState("")
  // const [rua, setRua] = useState("")
  // const [cidade, setCidade] = useState("")
  // const [bairro, setBairro] = useState("")
  // const [estado, setEstado] = useState("")
  // const [numero, setNumero] = useState("")

  const getPerson = async (): Promise<void> => {
    try {
      const res = await axios.get(`${process.env.API_URL}/getUser`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      })
      setName(res.data.user.name)
      setCPF(res.data.user.cpf)
      setEmail(res.data.user.email)
      setPhone(res.data.user.phone)
    } catch (error) {
      console.error('Erro', error)
    }
  }

  const postPerson = async (): Promise<void> => {
    try {
      const res = await axios.put(
        `${process.env.API_URL}/updateUser`,
        {
          name,
          cpf: CPF,
          email,
          phone,
          // cep,
          // rua,
          // cidade,
          // bairro,
          // estado,
          // numero,
        },
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        },
      )
      ToastShow(
        'success',
        'Dados Atualizados',
        'Seus dados foram atualizados com sucesso. ',
      )
      console.log('certo')
    } catch (error) {
      ToastShow(
        'error',
        'Erro ao Atualizados dados',
        'Seus dados não foram atualizados',
      )
      console.error('Erro', error)
    }
  }

  useEffect(() => {
    getPerson()
    console.log(getToken())
  }, [])

  return (
    <View style={defaultStyle.main_container}>
      <HeaderNavigation
        backScreen={'Main'}
        title=""
        icon={{ viewBox: '', fill: '', d: '' }}
      />

      <ScrollView style={styles.scroolView}>
        <View style={styles.header}>
          <Text style={[styles.title, defaultStyle.text_black]}>
            Configuração de Usuario
          </Text>
          <View style={styles.icons}>
            <Icons.iconUser width={100} height={100} color="#6B63FF" />
            <TouchableOpacity>
              <View style={styles.pen}>
                <Icons.iconPen width={17} height={17} color="#282832" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.type}>
            <Text style={[defaultStyle.text_black, styles.textType]}>
              Tipo de Pessoa:
            </Text>
            <View style={styles.checkBox}>
              <View style={styles.row}>
                <RadioButton
                  value="fisic"
                  status={checked === 'fisic' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('fisic'),
                      setTextName('Nome:'),
                      setTextCPF('CPF:'),
                      setPlaceholder('Ex: 000.000.000-00')
                  }}
                  color="#282832"
                />
                <Text style={[defaultStyle.text_black, styles.textType]}>
                  Física
                </Text>
              </View>

              <View style={styles.row}>
                <RadioButton
                  value="juridic"
                  status={checked === 'juridic' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setChecked('juridic'),
                      setTextName('Razão Social:'),
                      setTextCPF('CNPJ:'),
                      setPlaceholder('Ex: 00.000.000/0000-00')
                  }}
                  color="#282832"
                />
                <Text style={[defaultStyle.text_black, styles.textType]}>
                  Jurídica
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.inputs}>
          <View>
            <Text style={[defaultStyle.text_black, styles.textInput]}>
              {textName}
            </Text>
            <TextInput
              id="razao"
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
              {textCPF}
            </Text>
            <TextInput
              id="CNPJ"
              value={CPF}
              onChangeText={setCPF}
              placeholder={placeholder}
              keyboardType="default"
              placeholderTextColor={'#D9D9D9'}
              secureTextEntry={false}
              editable={false}
              style={[defaultStyle.defaul_input]}
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
              Telefone 1:
            </Text>
            <TextInput
              id="phone1"
              value={phone}
              onChangeText={setPhone}
              placeholder="Ex: (11) 99999-9999"
              keyboardType="default"
              placeholderTextColor={'#D9D9D9'}
              secureTextEntry={false}
              style={[defaultStyle.defaul_input]}
            />
          </View>
          <View>
            <Text style={[defaultStyle.text_black, styles.textInput]}>
              Telefone 2:
            </Text>
            <TextInput
              id="phone2"
              placeholder="Ex: (11) 99999-9999"
              keyboardType="default"
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
            <TextInput
              id="cep"
              // value={cep}
              // onChangeText={setCep}
              placeholder="Ex: 11111-111"
              keyboardType="default"
              placeholderTextColor={'#D9D9D9'}
              secureTextEntry={false}
              style={[defaultStyle.defaul_input]}
            />
          </View>

          <View style={styles.rua}>
            <Text style={[defaultStyle.text_black, styles.textInput]}>
              Endereço:
            </Text>
            <TextInput
              id="rua"
              // value={rua}
              // onChangeText={setRua}
              placeholder="Ex: Rua Brasil"
              keyboardType="default"
              placeholderTextColor={'#D9D9D9'}
              secureTextEntry={false}
              style={[defaultStyle.defaul_input]}
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
                  // value={cidade}
                  // onChangeText={setCidade}
                  placeholder="Ex: Osasco"
                  keyboardType="default"
                  placeholderTextColor={'#D9D9D9'}
                  secureTextEntry={false}
                  style={[defaultStyle.defaul_input]}
                />
              </View>
              <View>
                <Text style={[defaultStyle.text_black, styles.textInput]}>
                  Bairro:
                </Text>
                <TextInput
                  id="bairro"
                  // value={bairro}
                  // onChangeText={setBairro}
                  placeholder="Ex: Jd.Aeroporto"
                  keyboardType="default"
                  placeholderTextColor={'#D9D9D9'}
                  secureTextEntry={false}
                  style={[defaultStyle.defaul_input]}
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
                  // value={estado}
                  // onChangeText={setEstado}
                  placeholder="Ex: SP"
                  keyboardType="default"
                  placeholderTextColor={'#D9D9D9'}
                  secureTextEntry={false}
                  style={[defaultStyle.defaul_input]}
                />
              </View>

              <View>
                <Text style={[defaultStyle.text_black, styles.textInput]}>
                  Número:
                </Text>
                <TextInput
                  id="number"
                  // value={numero}
                  // onChangeText={setNumero}
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

        <TouchableOpacity onPress={postPerson}>
          <View style={[styles.btnFinish, defaultStyle.bg_blue]}>
            <Text style={[defaultStyle.text_white]}>Finalizar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserConfig
