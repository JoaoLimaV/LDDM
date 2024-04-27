import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard, ScrollView } from 'react-native';
import defaultStyle from '@components/DefaultStyle';
import HeaderNavigation from '@components/HeaderNavigation';
import Icons from '@icons/svgs';

import styles from '@styles/notifyStyle'

function Notify({ navigation }: any): React.JSX.Element {
    return (
        <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
            <HeaderNavigation backScreen={'Main'} title='' icon={{ viewBox: '', fill: '', d: '' }} />

            <View style={styles.absolute}>
                <Icons.iconGear width={30} height={30} color={"#282832"} />
            </View>

            <ScrollView style={styles.main_container}>

                <Text style={[styles.text_top, defaultStyle.text_black]}>Notificações recentes</Text>
                <TouchableOpacity>
                    <View style={styles.content_container}>

                        <View style={styles.btn_bot}>
                            <Icons.iconClock width={45} height={45} color={"#282832"} />
                            <View style={styles.text_view}>
                                <Text style={[styles.text_bot, defaultStyle.text_black]}>Corra para não perder</Text>
                                <Text style={[styles.text_small, defaultStyle.text_black]}>Outro usuário ofertou no seu produto, corra antes que o leilão feche.</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>

                <Text style={[styles.text_top, defaultStyle.text_black]}>Notificações antigas</Text>
                <TouchableOpacity>
                    <View style={styles.content_container}>

                        <View style={styles.btn_bot}>
                            <Icons.iconFire width={45} height={45} color={"#282832"} />
                            <View style={styles.text_view}>
                                <Text style={[styles.text_bot, defaultStyle.text_black]}>Corra para não perder</Text>
                                <Text style={[styles.text_small, defaultStyle.text_black]}>Outro usuário ofertou no seu produto, corra antes que o leilão feche.</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.content_container}>

                        <View style={styles.btn_bot}>
                            <Icons.iconCart width={45} height={45} color={"#282832"} />
                            <View style={styles.text_view}>
                                <Text style={[styles.text_bot, defaultStyle.text_black]}>Seu produto foi arrematado</Text>
                                <Text style={[styles.text_small, defaultStyle.text_black]}>O produto # foi arrematado por R$ 200. </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
            </ScrollView>
        </Pressable>
    );
}

export default Notify;


