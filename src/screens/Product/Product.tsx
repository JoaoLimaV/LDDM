import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation'
import svg_icon from '@components/SvgIcons'

import styles from './styles'

function Product({ navigation }: any) {
  return (
    <View style={defaultStyle.main_container}>
      <HeaderNavigation backScreen={'Main'} title='Encerramento em: 1d 20h 20m 23s' icon={{viewBox: '', fill: '', d:''}} />

      <View style={styles.divSlide}>
        <View style={styles.divImgs}>
          <View style={styles.divImgPrinc}>
            <View style={styles.imgPrinc}>
              <Image source={require('@images/carta.jpg')} style={styles.img} />
            </View>
          </View>

          <View style={styles.divImgSecun}>
            <View style={styles.imgSecun}>
              <Image source={require('@images/carta.jpg')} style={styles.img} />
            </View>
            <View style={styles.imgSecun}>
              <Image source={require('@images/carta.jpg')} style={styles.img} />
            </View>
          </View>
        </View>

        <View style={styles.divBtnSlide}>
          <TouchableOpacity
            style={[styles.btnSlide, defaultStyle.bg_black]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnSlide, defaultStyle.bg_black]}
          ></TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnSlide, defaultStyle.bg_black]}
          ></TouchableOpacity>
        </View>
      </View>

      <View style={styles.divDetails}>
        <View>
          <Text style={[defaultStyle.text_black, styles.title]}>
            Omnath, Locus da Criação
          </Text>
        </View>

        <View style={styles.divCategory}>
          <Text style={[defaultStyle.text_black, styles.category]}>Magic</Text>
          <View style={[defaultStyle.bg_black, styles.separator]}></View>
          <Text style={[defaultStyle.text_black, styles.category]}>Nova</Text>
          <View style={[defaultStyle.bg_black, styles.separator]}></View>
          <Text style={[defaultStyle.text_black, styles.category]}>Foil</Text>
        </View>

        <View>
          <Text style={[defaultStyle.text_black, styles.details]}>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século XVI
          </Text>
        </View>
      </View>

      <View style={styles.divHistoric}>
        <View><Text style={[defaultStyle.text_black, styles.historic]}>Histórico de Lances</Text></View>
      </View>

      <View style={styles.divThrow}>
        <View>
          <View><Text style={[defaultStyle.text_black, styles.throw]}>Lance Atual</Text></View>
          <View><Text style={[defaultStyle.text_black, styles.valueThrow]}>R$ 150,01</Text></View>
        </View>

        <View style={styles.divBtnThrow}>
          <View><TouchableOpacity style={styles.divBtn}><Text style={[defaultStyle.text_white, defaultStyle.bg_blue, styles.align]}>Dar Lance</Text></TouchableOpacity></View>
          <View><TouchableOpacity style={styles.divBtn}><Text style={[defaultStyle.text_blue, styles.borderBtn, styles.align]}>Arrematar</Text></TouchableOpacity></View>
        </View>

      </View>

    </View>

  )
}

export default Product
