import React, { useState, useEffect } from 'react'
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
import axios from 'axios'
import { getToken } from '@components/AuthStorage'

export default function ({ id_product, current_price, getProduct, callbackFunction }: any) {
  const [visible, setVisible] = useState(false)
  const [bidUser, setBidUser] = useState<number>(0)
  const [isDisabled, setDisabled] = React.useState<boolean>(true);

  const handleClose = () => {
    setVisible(false)
    setBidUser(0);
  }

  function handleBidUser(operator: string) {
    if (operator === '+') {
      setBidUser(bidUser + 10)
    }
    else {
      if (bidUser != 0) {
        setBidUser(bidUser - 10)
      }
    }
  }

  useEffect(() => {
    if (bidUser != 0) {
      setDisabled(false)
      return
    }
    setDisabled(true)
  }, [handleBidUser]);

  const registerBid = async () => {
    setDisabled(true)
    const token = await getToken();

    let config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };

    let json = {
      id_product: id_product,
      price: current_price + bidUser
    }

    axios.post(`${process.env.API_URL}/registerBid`, json, config)
      .then((response) => {
        getProduct()
        handleClose()
      })
      .catch((error) => {
        console.error(error)
      });
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
                    R$ {current_price}
                  </Text>
                </View>

                <View style={styleModal.separator}>
                  <View style={styleModal.value}>
                    <View>
                      <Text style={[defaultStyle.text_black, styleModal.title]}>
                        Seu lance:
                      </Text>
                      <Text style={[styleModal.details, bidUser != 0 ? defaultStyle.text_green : [defaultStyle.text_black, { opacity: .5 }],]}>
                        + R$ {bidUser}
                      </Text>
                    </View>

                    <View style={styleModal.btn}>
                      <TouchableOpacity style={styleModal.border} onPress={() => {
                        handleBidUser('+')
                      }}>
                        <Text style={[defaultStyle.text_black, styleModal.textBtn]}>
                          +
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styleModal.border}>
                        <Text style={[defaultStyle.text_black, styleModal.textBtn]}
                          onPress={() => {
                            handleBidUser('-')
                          }}>
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
                      R$ {current_price + bidUser}
                    </Text>
                  </View>

                  <View style={styleModal.throw}>
                    <TouchableOpacity
                      style={[styleModal.btnThrow, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled]}
                      disabled={isDisabled}
                      onPress={() => {
                        registerBid()
                      }}
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
          let result = callbackFunction();
          if (!result) {
            setVisible(true)
          }
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
