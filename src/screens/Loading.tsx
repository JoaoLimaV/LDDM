import React from 'react'
import { StyleSheet, View, Dimensions, Modal } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import defaultStyle from '@components/DefaultStyle'

const { width, height } = Dimensions.get('window')

const Loading = () => {
  return (
    <View>
      <Modal transparent={true}>
        <View style={[styles.container]}>
            <ActivityIndicator
              animating={true}
              color={'#7B76D5'}
              size={140}
              style={styles.position}
            />
            <ActivityIndicator
              animating={true}
              color={'#403F55'}
              size={120}
              style={styles.position}
            />
            <ActivityIndicator
              animating={true}
              color={'#1E1D33'}
              size={100}
              style={styles.position}
            />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1
  },

  position: {
    position: 'absolute', 
  },
})

export default Loading
