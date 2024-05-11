import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Switch,
} from 'react-native'
import defaultStyle from '@components/DefaultStyle'

import styles from '@styles/productStyle'
import Icons from '@icons/svgs'
import { RadioButton, ToggleButton } from 'react-native-paper'

export default function () {
  const [visible, setVisible] = useState(false)

  const [checked, setChecked] = useState('reject')
  const [isDisabled, setDisabled] = useState<boolean>(true)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                      <Switch
                        trackColor={{ false: '#D9D9D9', true: '#6B63FF' }}
                        thumbColor={isEnabled ? '#FFF' : '#FFF'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                    <View>
                      <Text style={[styleModal.title, defaultStyle.text_black]}>
                        Ativar Notificações
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={styleModal.separator}>
                  <Text style={[defaultStyle.text_black]}>
                    Lorem Ipsum é simplesmente uma simulação de texto da
                    indústria tipográfica e de impressos
                  </Text>
                </View>

                <View style={styleModal.separator}>
                  <View >
                    <TouchableOpacity
                      style={[styleModal.btnThrow, defaultStyle.bg_blue]}
                    >
                      <Text
                        style={[defaultStyle.text_white, styleModal.textBtn]}
                      >
                        Confirmar
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
        <Icons.iconGear width={30} height={30} color={'#282832'} />
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
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 2
  },

  separator: {
    flex: 1,
  },

  flexRow: {
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: 'center',
    gap: 10
  },

  title: {
    fontSize: 22,
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
