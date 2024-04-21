import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard, ScrollView } from 'react-native';
import DefaultStyle from '../components/DefaultStyle';
import HeaderNavigation from '../components/HeaderNavigation';

const MAX_LENGTH = 20; // Defina o comprimento máximo do nome

const truncateString = (str: string, max: number) => {
  return str.length > max ? str.substr(0, max) + '...' : str;
};

const produtos = [
  { nome: 'Omnath, Locus da Criação', preco: 'R$ 364,00' },
  { nome: 'Omnath, Locus da Criação', preco: 'R$ 364,00' },
  { nome: 'Omnath, Locus da Criação', preco: 'R$ 364,00' },
];

function Main({ navigation }: any): React.JSX.Element {
  return (
    <Pressable style={DefaultStyle.main_container} onPress={Keyboard.dismiss}>


      <View style={styles.header_container}>

        <View style={styles.div_input}>
          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('@icons2/icon_menu.png')}
            />
          </TouchableOpacity>

          <View style={styles.div_search}>
            <TextInput
              placeholder='Procure pelo produto'
              keyboardType='default'
              placeholderTextColor={'#282832'}
              secureTextEntry={false}
              style={[styles.styled_input, DefaultStyle.text_black]}
            />
            <TouchableOpacity>
              <Image
                style={{ width: 24, height: 25 }}
                source={require('@icons2/icon_search.png')}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 32 }}
              source={require('@icons2/icon_bell.png')}
            />
            <View style={styles.notification_text}>
              <Text style={DefaultStyle.text_black}>99</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.body_container}>

        <View style={styles.div_nav}>

          <TouchableOpacity style={styles.btn_nav}>
            <Image
              style={{ width: 30, height: 25, marginBottom: 5 }}
              source={require('@icons2/icon_star.png')}
            />
            <Text style={[styles.text_medium, DefaultStyle.text_blue]}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <Image
              style={{ width: 28, height: 25, marginBottom: 5 }}
              source={require('@icons2/icon_arrow.png')}
            />
            <Text style={[styles.text_medium, DefaultStyle.text_blue]}>Populares</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <Image
              style={{ width: 22, height: 25, marginBottom: 5 }}
              source={require('@icons2/icon_fire.png')}
            />
            <Text style={[styles.text_medium, DefaultStyle.text_blue]}>Em Alta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <Image
              style={{ width: 25, height: 25, marginBottom: 5 }}
              source={require('@icons2/icon_hammer.png')}
            />
            <Text style={[styles.text_medium, DefaultStyle.text_blue]}>Leiloar</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.header_product}>
          <Text style={[styles.text_big, DefaultStyle.text_black]}>Leilões em aberto:</Text>

          <View style={styles.display_items}>
            <TouchableOpacity style={styles.items_style}>
              <Image
                style={{ width: 15, height: 15 }}
                source={require('@icons2/icon_filter.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items_style}>
              <Image
                style={{ width: 15, height: 15 }}
                source={require('@icons2/icon_grid.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items_style}>
              <Image
                style={{ width: 15, height: 15 }}
                source={require('@icons2/icon_list.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scroll_product}>
          <View style={styles.body_product}>
            {produtos.map((produto, index) => (
              <TouchableOpacity key={index} style={styles.card_product} onPress={() => { navigation.navigate('Product');}}>
                <View style={styles.card_top}>
                  <Text style={[styles.text_medium, DefaultStyle.text_black]}>1d 20h 20m 23s</Text>
                  <View style={styles.div_image}>
                    <Image
                      style={styles.image_product}
                      source={require("../../assets/images/product.png")}
                    />
                  </View>
                </View>
                <View style={styles.desc_product}>
                  <View style={styles.desc_right}>
                    <Text style={[styles.text_medium, DefaultStyle.text_black, { marginTop: 10 }]}>
                      {truncateString(produto.nome, MAX_LENGTH)}
                    </Text>
                    <Text style={[styles.text_medium, DefaultStyle.text_blue]}>{produto.preco}</Text>
                  </View>
                    <Image
                      style={{ width: 30, height: 25, marginBottom: 5 }}
                      source={require('@icons2/icon_star.png')}
                    />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <HeaderNavigation backScreen={'Home'} title='' />
    </Pressable>
  );
}

const styles: any = StyleSheet.create({
  /*Header*/
  header_container: {
    paddingTop: 20
  },
  div_input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  div_search: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#282832',
    paddingLeft: 7,
    paddingRight: 15
  },
  styled_input: {
    width: '90%',
    height: 35,
    paddingLeft: 7,
    paddingBottom: 3,
    fontSize: 18
  },
  notification_text: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  /*Body*/
  body_container: {
    flexDirection: 'column',
    marginTop: 20,
    borderTopWidth: 2,
    borderColor: '#282832',
    flex: 1
  },
  div_nav: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn_nav: {
    width: '20%',
    margin: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#6B63FF',
    flexDirection: 'column',
    paddingTop: "3%",
    paddingBottom: '1%',
    alignItems: 'center',
  },
  text_small: {
    fontSize: 10,
  },
  text_medium: {
    fontSize: 12,
  },
  text_big: {
    fontSize: 22,
  },
  header_product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  display_items: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#282832',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  items_style: {
    margin: 6,
  },
  scroll_product: {
    flex: 1
  },
  body_product: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card_product: {
    marginTop: "4%",
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#D9D9D9',
    justifyContent: 'space-between',
  },
  card_top: {
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  div_image: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image_product: {
    width: "90%",
    height: "90%",
    resizeMode: "contain"
  },
  desc_product: {
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,

    width: "100%",
    backgroundColor: "#D9D9D9",
    flexDirection: 'row',
    alignItems: 'center'
  },
  desc_right: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  }
});

export default Main;


