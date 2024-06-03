import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation'

import styles from '@styles/productStyle'
import Accordion from '@components/Accordion'
import ModalThrow from '@screens/product/ModalThrow'
import ModalCastOff from './ModalCastOff'

import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { useAlertNotLogin } from '@components/Alert'

function Product({ navigation, route }: any): React.JSX.Element {

  const alertNotLogin = useAlertNotLogin();


  let { idProduct, notLogin } = route.params;
  let [product, setProduct] = React.useState<any>({});

  const getProduct = async () => {

    opendImgModal();

    axios.get(`${process.env.API_URL}/getProduct/${idProduct}`)
      .then((response) => {
        setProduct(response.data.produto)
        closeImgModal()
      })
      .catch((error) => {
        console.error(error)
      });
  }

  const imageUrl = product && product.images && product.images.length > 0
    ? product.images[0]
    : 'https://www.tiffincurry.ca/wp-content/uploads/2021/02/default-product.png';

  // Modal 

  const [openModal, setOpenModal] = React.useState<boolean>(true);

  const opendImgModal = async () => {
    setOpenModal(true)
  };

  const closeImgModal = async () => {
    setOpenModal(false)
  };

  useFocusEffect(
    React.useCallback(() => {
      getProduct();
    }, [])
  );

  return (
    <View style={[defaultStyle.main_container, { padding: 0, paddingTop: 15, paddingBottom: 15, paddingLeft: 0, paddingRight: 0 }]}>
      <View style={{ paddingLeft: 15, paddingRight: 15 }}>
        <HeaderNavigation
          backScreen={'Main'}
          title="Encerramento em: 1d 20h 20m 23s"
          icon={{ viewBox: '', fill: '', d: '' }}
        />
      </View>

      <ScrollView style={styles.scroll_view}>
        <View style={styles.base}>
          <View style={styles.slide}>
            <View style={styles.imagens}>
              <View style={styles.imgPrinc}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
              </View>

              {/* <View style={styles.imgSec}>
                <Image
                  style={styles.image_small}
                  source={require('@images/carta.jpg')}
                />
                <Image
                  style={styles.image_small}
                  source={require('@images/carta.jpg')}
                />
              </View> */}
            </View>

            {/* <View style={styles.divBtnSlide}>
              <TouchableOpacity
                style={[styles.btnSlide, defaultStyle.bg_black]}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnSlide, defaultStyle.bg_black]}
              ></TouchableOpacity>
              <TouchableOpacity
                style={[styles.btnSlide, defaultStyle.bg_black]}
              ></TouchableOpacity>
            </View> */}
          </View>

          <View style={styles.divDetails}>
            <View>
              <Text style={[defaultStyle.text_black, styles.title]}>
                {product.name}
              </Text>
            </View>

            <View style={styles.divCategory}>
              <Text style={[defaultStyle.text_black, styles.category]}>
                GameCard
              </Text>
              <View style={[defaultStyle.bg_black, styles.separator]}></View>
              <Text style={[defaultStyle.text_black, styles.category]}>
                Nova
              </Text>
              <View style={[defaultStyle.bg_black, styles.separator]}></View>
              <Text style={[defaultStyle.text_black, styles.category]}>
                Qualidade
              </Text>
              <View style={[defaultStyle.bg_black, styles.separator]}></View>
              <Text style={[defaultStyle.text_black, styles.category]}>
                Primio
              </Text>
            </View>

            <View>
              <Text style={[defaultStyle.text_black, styles.details]}>
                {product.desc}
              </Text>
            </View>
          </View>

          <View style={styles.divHistoric}>
            <View>
              <Text style={[defaultStyle.text_black, styles.historic]}>
                Histórico de Lances
              </Text>
            </View>
            {product.history_bid && product.history_bid.length > 0 ? (
              product.history_bid.map((bid: any, index: any) => (
                <Accordion
                  key={index}
                  title={`Lance: R$ ${bid.price.toFixed(2)}`}
                  data={new Date(bid.bid_created_at).toLocaleDateString('pt-BR')}
                  hora={new Date(bid.bid_created_at).toLocaleTimeString('pt-BR')}
                  price={bid.price}
                  percentage={bid.percentage}
                />
              ))
            ) : (
              <Text style={[styles.not_history_bid, defaultStyle.text_black]}>
                Não há lances para este produto ainda. Seja o primeiro!
              </Text>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.border}>
        <View>
          <Text style={[defaultStyle.text_black, styles.throw]}>
            Lance Atual
          </Text>
          <Text style={[defaultStyle.text_black, styles.value]}>R$ {product.current_price}</Text>
        </View>
        <View style={styles.divBtn}>

          <ModalThrow
            id_product={product.id}
            current_price={product.current_price}
            getProduct={getProduct}
            callbackFunction={() => {
              if (notLogin) {
                alertNotLogin()
                return true
              }
            }}
          />
          <ModalCastOff
            id_product={product.id}
            final_bid={product.final_bid_price}
            callbackFunction={() => {
              if (notLogin) {
                alertNotLogin()
                return true
              }
            }}
          />

        </View>
      </View>

      {openModal &&
        <View style={[defaultStyle.modal]} >
          <Spinner
            visible={true}
          />
        </View>
      }
    </View>
  )
}

export default Product
