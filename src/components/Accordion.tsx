import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'

import Icons from '@icons/svgs'
import defaultStyle from './DefaultStyle'

export default function Accordion({
  title,
  data,
  hora,
  price,
  percentage
}: {
  title: string
  data: string
  hora: string
  price: number
  percentage: number
}) {
  const [opened, setOpened] = useState(false)
  const [animation, setAnimation] = useState(new Animated.Value(0))

  function toggleAccordion() {
    if (!opened) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }).start()
    }
    setOpened(!opened)
  }

  const heightAnimationInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 70],
  })

  const borderTopWidthInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={styles.header}>
          <View style={styles.lineIconTitle}>
            <Icons.iconHammer width={25} height={25} color={'#282832'} />
            <Text style={[defaultStyle.text_black, styles.title]}>{title}</Text>
          </View>
          <TouchableOpacity onPress={toggleAccordion}>
            {opened ? (
              <Icons.iconArrowUp width={25} height={25} color={'#6B63FF'} />
            ) : (
              <Icons.iconArrowDown width={25} height={25} color={'#6B63FF'} />
            )}
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>

      <Animated.View
        style={[styles.content, { height: heightAnimationInterpolation }]}
      >
        <Animated.View
          style={[
            styles.detailsContainer,
            { borderTopWidth: borderTopWidthInterpolation },
          ]}
        >
          <View style={styles.details}>
            <View>
              <Text style={[defaultStyle.text_black, styles.textDetails]}>
                Data: {data}
              </Text>
              <Text style={[defaultStyle.text_black, styles.textDetails]}>
                Hora: {hora}
              </Text>
            </View>
            <View>
              <Text style={[defaultStyle.text_green, styles.textDetails]}>
                + R$ {percentage != null ? percentage : 0}
              </Text>
            </View>
          </View>
        </Animated.View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 10,
    borderColor: '#6B63FF',
    borderWidth: 2,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },

  lineIconTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,

  },

  title: {
    fontWeight: 'bold',
  },

  content: {},

  detailsContainer: {
    borderColor: '#6B63FF',
    marginVertical: 10,
  },

  details: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  textDetails: {
  },
})
