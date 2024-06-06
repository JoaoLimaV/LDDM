import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native'
import React, { useState } from 'react'

import Icons from '@icons/svgs'
import defaultStyle from './DefaultStyle'
import { useNavigation } from '@react-navigation/native';

export default function AccordionProduct({
  id,
  nome,
  data,
  hora,
  desc,
  preco_inicial,
  preco_arremate,
  preco_atual,
  img,
  status
}: {
  id: number,
  nome: string,
  data: string,
  hora: string,
  desc: string,
  preco_inicial: number,
  preco_arremate: number,
  preco_atual: number,
  img: string,
  status: string
}) {
  const [opened, setOpened] = useState(false)
  const [animation] = useState(new Animated.Value(0))
  const navigation = useNavigation();

  function toggleAccordion() {
    if (!opened) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start()
    }
    setOpened(!opened)
  }

  const heightAnimationInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 450], // Adjust height as per requirement
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
            <Icons.iconCash width={25} height={25} color={'#282832'} />

            <Text style={[defaultStyle.text_black, styles.title]}> Produto #{id}</Text>
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
            <ScrollView style={{ width: '100%' }}>

            <Text style={[defaultStyle.text_black, styles.title, { marginTop: 10, width: '100%', textAlign: 'center' }]}> {status} </Text>


              <View style={styles.imgPrinc}>
                <Image source={{ uri: img }} style={styles.image} />
              </View>

              <Text style={[defaultStyle.text_black, { fontSize: 16 }]}> Nome do Produto </Text>

              <TextInput
                placeholder=""
                keyboardType="default"
                placeholderTextColor={"#282832"}
                secureTextEntry={false}
                style={[defaultStyle.defaul_input, { marginBottom: 10 }]}
                value={nome}
                editable={false}
              />


              <Text style={[defaultStyle.text_black, { fontSize: 16 }]}> Data de criação </Text>

              <TextInput
                placeholder=""
                keyboardType="default"
                placeholderTextColor={"#282832"}
                secureTextEntry={false}
                style={[defaultStyle.defaul_input, { marginBottom: 10 }]}
                value={data}
                editable={false}
              />

              <Text style={[defaultStyle.text_black, { fontSize: 16 }]}> Horário </Text>

              <TextInput
                placeholder=""
                keyboardType="default"
                placeholderTextColor={"#282832"}
                secureTextEntry={false}
                style={[defaultStyle.defaul_input, { marginBottom: 10 }]}
                value={hora}
                editable={false}
              />

              <Text style={[defaultStyle.text_black, { fontSize: 16 }]}> Descrição </Text>

              <TextInput
                placeholder=""
                keyboardType="default"
                placeholderTextColor={"#282832"}
                secureTextEntry={false}
                style={[defaultStyle.defaul_input, styles.inputMultiline]}
                value={desc}
                multiline={true}
                textAlignVertical="top"
              />

              <Text style={[defaultStyle.text_black, { fontSize: 16 }]}> Preço inicial </Text>

              <TextInput
                placeholder=""
                keyboardType="numeric"
                placeholderTextColor={"#282832"}
                secureTextEntry={false}
                style={[defaultStyle.defaul_input, { marginBottom: 10 }]}
                value={preco_inicial.toString()}
                editable={false}
              />

              <Text style={[defaultStyle.text_black, { fontSize: 16 }]}> Preço de Arremate </Text>

              <TextInput
                placeholder=""
                keyboardType="numeric"
                placeholderTextColor={"#282832"}
                secureTextEntry={false}
                style={[defaultStyle.defaul_input, { marginBottom: 10 }]}
                value={preco_arremate.toString()}
                editable={false}
              />

              <Text style={[defaultStyle.text_black, { fontSize: 16 }]}> Preço atual ( Lance mais Recente ) </Text>

              <TextInput
                placeholder="Preço atual"
                keyboardType="numeric"
                placeholderTextColor={"#282832"}
                secureTextEntry={false}
                style={[defaultStyle.defaul_input, { marginBottom: 10 }]}
                value={preco_atual.toString()}
                editable={false}
              />

              <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue]}
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate('Product', {
                    idProduct: id,
                  })
                }}
              >
                <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Ver Produto </Text>
              </TouchableOpacity>
            </ScrollView>
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

  content: {
    overflow: 'hidden',
  },

  detailsContainer: {
    borderColor: '#6B63FF',
    marginVertical: 10,
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  inputMultiline: {
    height: 150,
    borderRadius: 25,
    marginBottom: 5
  },
  imgPrinc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    alignSelf: 'center',
    width: 150,
    borderRadius: 50,
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
})
