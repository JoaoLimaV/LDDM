import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import defaultStyle from '@components/DefaultStyle'

import styles from '@styles/productStyle'
import Icons from '@icons/svgs'
import { RadioButton } from 'react-native-paper'
import axios from 'axios'
import { getToken } from '@components/AuthStorage'
import { ToastShow, styleToast } from '@components/Toast'
import Toast from 'react-native-toast-message'
import { err } from 'react-native-svg'

export default function ({
  id_product,
  final_bid,
  callbackFunction,
  getProduct,
}: any) {
  const [visible, setVisible] = useState(false)

  const [checked, setChecked] = useState('reject')
  const [isDisabled, setDisabled] = useState<boolean>(true)

  const handleClose = () => {
    setVisible(false)
    setChecked('reject')
  }

  const finishBid = async () => {
    setDisabled(true)
    const token = await getToken()

    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }

    let json = {
      id_product: id_product,
    }

    axios
      .post(`${process.env.API_URL}/product/registerbid/finish`, json, config)
      .then((response) => {
        getProduct()
        handleClose()
      })
      .catch((error) => {
        ToastShow('error', 'Erro', 'Erro')
        console.log(error)
      })
  }

  return (
    <View>
      <Modal transparent={true} visible={visible}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styleModal.container}>
            <Toast config={styleToast} />
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <View style={styleModal.modal}>
                <View style={styleModal.separator}>
                  <View style={styleModal.flexRow}>
                    <View>
                      <Text style={[styleModal.title, defaultStyle.text_black]}>
                        Arrematar por $ {final_bid}
                      </Text>
                    </View>
                    <View>
                      <Icons.iconHammer
                        width={25}
                        height={25}
                        color={'#282832'}
                      />
                    </View>
                  </View>
                </View>

                <View style={styleModal.separator}>
                  <Text style={defaultStyle.text_red}>
                    * Arrematar resulta em uma ação de compra imediata do item.
                  </Text>
                </View>

                <View style={styleModal.separator}>
                  <View style={styleModal.div_radio_btn}>
                    <RadioButton
                      value="accept"
                      status={checked === 'accept' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        setChecked('accept')
                        setDisabled(false)
                      }}
                      color="#282832"
                    />
                    <Text style={[defaultStyle.text_black]}>
                      Confirmar arremate
                    </Text>
                  </View>
                </View>

                <View style={styleModal.separator}>
                  <View style={styleModal.throw}>
                    <TouchableOpacity
                      style={[
                        styleModal.btnThrow,
                        defaultStyle.bg_blue,
                        isDisabled && defaultStyle.disabled,
                      ]}
                      disabled={isDisabled}
                      onPress={finishBid}
                    >
                      <Text
                        style={[defaultStyle.text_white, styleModal.textBtn]}
                      >
                        Arrematar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          let result = callbackFunction()
          if (!result) {
            setVisible(true)
          }
        }}
      >
        <Text style={[defaultStyle.text_blue, styles.btn]}>Arrematar</Text>
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
    height: '30%',
    borderRadius: 30,
    padding: 40,
  },

  separator: {
    flex: 1,
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
  },

  div_radio_btn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    left: -10,
  },

  throw: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnThrow: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
  },

  textBtn: {
    fontSize: 22,
  },
})
