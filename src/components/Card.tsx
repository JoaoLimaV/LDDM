import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from '@styles/mainStyle'
import defaultStyle from '@components/DefaultStyle'
import Icons from '@icons/svgs'
import contarRegressivamente from '../../assets/functions/contarRegressivamente.js'

const MAX_LENGTH = 20

const truncateString = (str: string, max: number): string => {
  return str.length > max ? str.substr(0, max) + '...' : str
}

interface CardProps {
  id: number;
  name: string;
  images: string;
  currentPrice: string;
  dateNow: string;
  endAt: string;
  notLogin: boolean;
  statusUser: number;
}

const Card: React.FC<CardProps> = ({ notLogin, statusUser, id, name, images, currentPrice, dateNow, endAt }) => {
  const [sTextEnd, setsTextEnd] = useState<string>('')

  useEffect(() => {
    const limparIntervalo = contarRegressivamente(dateNow, endAt, setsTextEnd)
    return limparIntervalo
  }, [dateNow, endAt])

  const navigation = useNavigation()

  return (
    <TouchableOpacity
      key={id}
      style={styles.card_product}
      onPress={() => {
        // @ts-ignore
        navigation.navigate('Product', {
          idProduct: id,
          notLogin: notLogin,
          statusUser: statusUser,
        })
      }}
    >
      <View style={styles.card_top}>
        <Text style={[{ fontSize: 12 }, defaultStyle.text_black]}>
          {sTextEnd}
        </Text>
        <View style={styles.div_image}>
          <Image style={styles.image_product} source={{ uri: images }} />
        </View>
      </View>

      <View style={styles.desc_product}>
        <View style={styles.desc_right}>
          <Text
            style={[{ fontSize: 12 }, defaultStyle.text_black, { marginTop: 10 }]}
          >
            {truncateString(name, MAX_LENGTH)}
          </Text>
          <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>
            {currentPrice}
          </Text>
        </View>
        <Icons.iconStar
          width={30}
          height={25}
          color={'#6B63FF'}
          isFilled={false}
        />
      </View>
    </TouchableOpacity>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  currentPrice: PropTypes.string.isRequired,
  dateNow: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  notLogin: PropTypes.bool.isRequired,
  statusUser: PropTypes.number.isRequired,
}

export default Card
