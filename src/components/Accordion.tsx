import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native'
import React from 'react'

export default function Accordion() {
  function toggleAccordion() {}
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={toggleAccordion}>
        <View style={styles.header}>
          <Text>Titulo</Text>
          <Image
            style={styles.image}
            source={require('@icons/arrow-down.png')}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 6,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  image: {
    width: 35,
    height: 35,
  },
})
