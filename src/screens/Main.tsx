import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard, ScrollView } from 'react-native';
import defaultStyle from '@components/DefaultStyle';
import HeaderNavigation from '@components/HeaderNavigation';
import svg_icon from '@components/SvgIcons';
import Svg, { Path } from 'react-native-svg';

import styles from '@styles/mainStyle'

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
    <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>


      <View style={styles.header_container}>

        <View style={styles.div_input}>
          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('@icons/icon_menu.png')}
            />
          </TouchableOpacity>

          <View style={styles.div_search}>
            <TextInput
              placeholder='Procure pelo produto'
              keyboardType='default'
              placeholderTextColor={'#282832'}
              secureTextEntry={false}
              style={[styles.styled_input, defaultStyle.text_black]}
            />
            <TouchableOpacity>
              <Svg style={{ width: 24, height: 25 }} viewBox={svg_icon.search.viewBox}>
                <Path fill={svg_icon.search.fill} d={svg_icon.search.d} />
              </Svg>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Image
              style={{ width: 30, height: 32 }}
              source={require('@icons/icon_bell.png')}
            />
            <View style={styles.notification_text}>
              <Text style={defaultStyle.text_black}>99</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.body_container}>

        <View style={styles.div_nav}>

          <TouchableOpacity style={styles.btn_nav}>
            <Image
              style={{ width: 30, height: 25, marginBottom: 5 }}
              source={require('@icons/icon_star.png')}
            />
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <Image
              style={{ width: 28, height: 25, marginBottom: 5 }}
              source={require('@icons/icon_arrow.png')}
            />
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>Populares</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <Image
              style={{ width: 22, height: 25, marginBottom: 5 }}
              source={require('@icons/icon_fire.png')}
            />
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>Em Alta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <Image
              style={{ width: 25, height: 25, marginBottom: 5 }}
              source={require('@icons/icon_hammer.png')}
            />
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>Leiloar</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.header_product}>
          <Text style={[{ fontSize: 22 }, defaultStyle.text_black]}>Leilões em aberto:</Text>

          <View style={styles.display_items}>
            <TouchableOpacity style={styles.items_style}>
              <Image
                style={{ width: 15, height: 15 }}
                source={require('@icons/icon_filter.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items_style}>
              <Image
                style={{ width: 15, height: 15 }}
                source={require('@icons/icon_grid.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items_style}>
              <Image
                style={{ width: 15, height: 15 }}
                source={require('@icons/icon_list.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scroll_product}>
          <View style={styles.body_product}>
            {produtos.map((produto, index) => (
              <TouchableOpacity key={index} style={styles.card_product} onPress={() => { navigation.navigate('Product'); }}>
                <View style={styles.card_top}>
                  <Text style={[{ fontSize: 12 }, defaultStyle.text_black]}>1d 20h 20m 23s</Text>
                  <View style={styles.div_image}>
                    <Image
                      style={styles.image_product}
                      source={require("@images/product.png")}
                    />
                  </View>
                </View>
                <View style={styles.desc_product}>
                  <View style={styles.desc_right}>
                    <Text style={[{ fontSize: 12 }, defaultStyle.text_black, { marginTop: 10 }]}>
                      {truncateString(produto.nome, MAX_LENGTH)}
                    </Text>
                    <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>{produto.preco}</Text>
                  </View>
                  <Image
                    style={{ width: 30, height: 25, marginBottom: 5 }}
                    source={require('@icons/icon_star.png')}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <HeaderNavigation backScreen={'Home'} title='' icon={{ viewBox: '', fill: '', d: '' }} />
    </Pressable>
  );
}

export default Main;


