import React, { useState } from 'react'
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import defaultStyle from '@components/DefaultStyle'

import styles from '@styles/productStyle'

export default function () {
  const [visible, setVisible] = useState(false)

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
              <Text style={[defaultStyle.text_black, styleModal.title]}>
                Lance atual:
              </Text>
              <Text style={[defaultStyle.text_black, styleModal.details]}>
                R$ 150,00
              </Text>
            </View>

            <View style={styleModal.separator}>
              <View style={styleModal.value}>
                <View>
                  <Text style={[defaultStyle.text_black, styleModal.title]}>
                    Seu lance:
                  </Text>
                  <Text style={[styleModal.details, defaultStyle.text_green]}>
                    + R$ 30
                  </Text>
                </View>

                <View style={styleModal.btn}>
                  <TouchableOpacity style={styleModal.border}>
                    <Text style={[defaultStyle.text_black, styleModal.textBtn]}>
                      +
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styleModal.border}>
                    <Text style={[defaultStyle.text_black, styleModal.textBtn]}>
                      -
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styleModal.separator}>
              <View style={styleModal.flexRow}>
                <Text style={[defaultStyle.text_black, styleModal.details]}>
                  Total:
                </Text>
                <Text style={[defaultStyle.text_black, styleModal.details]}>
                  R$ 180
                </Text>
              </View>

              <View style={styleModal.throw}>
                <TouchableOpacity
                  style={[styleModal.btnThrow, defaultStyle.bg_blue]}
                >
                  <Text style={[defaultStyle.text_white, styleModal.title]}>Dar Lance</Text>
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
        <Text
          style={[defaultStyle.text_white, defaultStyle.bg_blue, styles.btn]}
        >
          Dar lance
        </Text>
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
    height: '40%',
    borderRadius: 30,
    padding: 40,
  },

  separator: {
    flex: 1,
    width: '100%',
  },

  title: {
    fontSize: 26,
  },

  details: {
    fontSize: 20,
  },

  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btn: {
    flexDirection: 'row',
    gap: 10,
  },

  border: {
    borderWidth: 2,
    borderRadius: 15,
    width: 50,
    height: 50,
  },

  textBtn: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
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
    padding: 10,
  },
})
