import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard, ScrollView } from 'react-native';
import defaultStyle from '@components/DefaultStyle';
import HeaderNavigation from '@components/HeaderNavigation';
import Icons from '@icons/svgs';

import styles from '@styles/notifyStyle'
import ModalNotify from './ModalNotify';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { getToken } from '@components/AuthStorage'

function Notify({ navigation }: any): React.JSX.Element {

    let [notifys, setNotifys] = React.useState<any[]>([]);  // Inicialize como array vazio

    const getProduct = async () => {

        const token = await getToken();

        let config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };

        axios.get(`${process.env.API_URL}/getNotification`, config)
            .then((response) => {
                setNotifys(response.data.notifications)
            })
            .catch((error) => {
                console.error(error)
            });
    }

    const handlePress = (notify: any) => {
        if (notify.type === 4 || notify.type === 5) {
            let addonsJson = JSON.parse(notify.addons)
            console.log(addonsJson.id_product)
            navigation.navigate('Product', {
                idProduct: addonsJson.id_product
            });
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getProduct();
        }, [])
    );

    return (
        <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
            <HeaderNavigation backScreen={'Main'} title='' icon={{ viewBox: '', fill: '', d: '' }} />

            <TouchableOpacity style={styles.absolute}>
                <ModalNotify />
            </TouchableOpacity>

            <ScrollView style={styles.main_container}>

                <Text style={[styles.text_top, defaultStyle.text_black]}> Notificações </Text>
                {notifys.map((notify: any) => (
                    <TouchableOpacity key={notify.id}>
                        <View style={styles.content_container}>

                            <TouchableOpacity style={styles.btn_bot}   // Use notify.id como chave, assumindo que cada notificação tem um campo id
                                onPress={() => handlePress(notify)}
                            >
                                <Icons.iconClock width={45} height={45} color={"#282832"} />
                                <View style={styles.text_view}>
                                    <Text style={[styles.text_bot, defaultStyle.text_black]}>{notify.title}</Text>
                                    <Text style={[styles.text_small, defaultStyle.text_black]}>{notify.message}</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </TouchableOpacity>
                ))}

                {/* <Text style={[styles.text_top, defaultStyle.text_black]}>Notificações antigas</Text>
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
                </TouchableOpacity> */}

            </ScrollView>
        </Pressable>
    );
}

export default Notify;
