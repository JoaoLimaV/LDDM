import React, { useState } from 'react'
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

export default function () {
  const [visible, setVisible] = useState(false)

  const [checked, setChecked] = React.useState('reject')
  const [isDisabled, setDisabled] = React.useState<boolean>(true)

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <View>
      <Modal transparent={true} visible={visible}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styleModal.container}>
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <View style={styleModal.modal}>
                <View style={styleModal.separator}>
                  <View style={styleModal.flexRow}>
                    <View>
                      <Text style={[styleModal.title, defaultStyle.text_black]}>
                        Arrematar por $300
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
                        console.log(`teste`)
                      }}
                      color='#282832'
                    />
                    <Text style={[defaultStyle.text_black]}>
                      Confirmar arremate
                    </Text>
                  </View>
                </View>

                <View style={styleModal.separator}>
                  <View style={styleModal.throw}>
                    <TouchableOpacity
                      style={[styleModal.btnThrow, defaultStyle.bg_blue]}
                    >
                      <Text style={[defaultStyle.text_white, styleModal.textBtn]}>
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
          setVisible(true)
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
    height: 50
  },

  textBtn: {
    fontSize: 22,
  },
})
