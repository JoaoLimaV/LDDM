import React from 'react'
import { StyleSheet, View, Dimensions, Modal } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import defaultStyle from '@components/DefaultStyle'
import Spinner from 'react-native-loading-spinner-overlay';

const { width, height } = Dimensions.get('window')

const Loading = () => {
  return (
    <View>
      <Modal transparent={true}>
        <View style={[styles.container]}>
          <Spinner
            visible={true}
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
