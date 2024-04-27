import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard, ScrollView } from 'react-native';
import defaultStyle from '@components/DefaultStyle';
import HeaderNavigation from '@components/HeaderNavigation';
import Icons from '@icons/svgs';

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
          <TouchableOpacity onPress={() => { navigation.navigate('Settings');}}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require('@images/foto.png')}
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
            <Icons.iconSearch width={25} height={25} color={"#282832"} />
            <TouchableOpacity>

            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Icons.iconNotify width={30} height={32} color={"#282832"} />
            <View style={styles.notification_text}>
              <Text style={defaultStyle.text_black}>99</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.body_container}>

        <View style={styles.div_nav}>

          <TouchableOpacity style={styles.btn_nav}>
            <View style={{ marginBottom: 5 }}>
              <Icons.iconStar width={30} height={25} color={"#6B63FF"} />
            </View>
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>Favoritos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <View style={{ marginBottom: 5 }}>
              <Icons.iconTrend width={28} height={25} color={"#6B63FF"} />
            </View>
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>Populares</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <View style={{ marginBottom: 5 }}>
              <Icons.iconFire width={22} height={25} color={"#6B63FF"} />
            </View>
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>Em Alta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn_nav}>
            <View style={{ marginBottom: 5 }}>
              <Icons.iconHammer width={25} height={25} color={"#6B63FF"} />
            </View>
            <Text style={[{ fontSize: 12 }, defaultStyle.text_blue]}>Leiloar</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.header_product}>
          <Text style={[{ fontSize: 22 }, defaultStyle.text_black]}>Leilões em aberto:</Text>

          <View style={styles.display_items}>
            <TouchableOpacity style={styles.items_style}>
              <Icons.iconFilter width={15} height={15} color={"#282832"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items_style}>
              <Icons.iconGrid width={15} height={15} color={"#282832"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.items_style}>
              <Icons.iconList width={15} height={15} color={"#282832"} />
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
                  <Icons.iconStar width={30} height={25} color={"#6B63FF"} isFilled={false} />
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


