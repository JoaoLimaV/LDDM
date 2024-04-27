import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';

import styles from '@styles/productStyle'

function Product({ navigation }: any): React.JSX.Element {

  return (
    <View style={defaultStyle.main_container}>
      <HeaderNavigation
        backScreen={'Main'}
        title="Encerramento em: 1d 20h 20m 23s"
        icon={{ viewBox: '', fill: '', d: '' }}
      />  


      <ScrollView style={styles.scroll_view}>
      <View style={styles.base}>
          <View style={styles.slide}>
            <View style={styles.imagens}>
              <View style={styles.imgPrinc}>
                <Image source={require('@images/carta.jpg')} />
              </View>
              <View style={styles.imgSec}>
                <Image
                  style={styles.image_small}
                  source={require('@images/carta.jpg')}
                />
                <Image
                  style={styles.image_small}
                  source={require('@images/carta.jpg')}
                />
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
              <Text style={[defaultStyle.text_black, styles.category]}>
                Magic
              </Text>
              <View style={[defaultStyle.bg_black, styles.separator]}></View>
              <Text style={[defaultStyle.text_black, styles.category]}>
                Nova
              </Text>
              <View style={[defaultStyle.bg_black, styles.separator]}></View>
              <Text style={[defaultStyle.text_black, styles.category]}>
                Foil
              </Text>
            </View>

            <View>
              <Text style={[defaultStyle.text_black, styles.details]}>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI
              </Text>
            </View>
          </View>

          <View style={styles.divHistoric}>
            <View>
              <Text style={[defaultStyle.text_black, styles.historic]}>
                Histórico de Lances
              </Text>
            </View>
            <View><Text>Teste</Text></View>
            <View><Text>Teste</Text></View>
            <View><Text>Teste</Text></View>
            <View><Text>Teste</Text></View>
          </View>

          
        </View>
      </ScrollView>

      <View style={styles.border}>

            <View>
              <Text style={[defaultStyle.text_black, styles.throw]}>
                Lance Atual
              </Text>
              <Text style={[defaultStyle.text_black, styles.value]}>
                R$ 150,00
              </Text>
            </View>
            <View style={styles.divBtn}>
              <TouchableOpacity>
                <Text
                  style={[
                    defaultStyle.text_white,
                    defaultStyle.bg_blue,
                    styles.btn,
                  ]}
                >
                  Dar lance
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={[defaultStyle.text_blue, styles.btn]}>
                  Arrematar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        

    </View>
  );
}

export default Product;


