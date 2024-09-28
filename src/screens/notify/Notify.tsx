import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard, ScrollView } from 'react-native';
import defaultStyle from '@components/DefaultStyle';
import HeaderNavigation from '@components/HeaderNavigation';
import Icons from '@icons/svgs';

import styles from '@styles/notifyStyle';
import ModalNotify from './ModalNotify';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import { getToken } from '@components/AuthStorage';

function Notify({ navigation }: any): React.JSX.Element {

    function iconNotify(type: number) {
        switch (type) {
            case 0:
                return <Icons.iconParty width={45} height={45} color={"#282832"} />;
            case 1:
                return <Icons.iconWelcome width={45} height={45} color={"#282832"} />;
            case 2:
                return <Icons.iconEdit width={45} height={45} color={"#282832"} />;
            case 3:
                return <Icons.iconBag width={45} height={45} color={"#282832"} />;
            case 4:
                return <Icons.iconFire width={45} height={45} color={"#282832"} />;
            case 5:
                return <Icons.iconHammer width={45} height={45} color={"#282832"} />;
            case 6:
                return <Icons.iconClock width={45} height={45} color={"#282832"} />;
            case 7:
                return <Icons.iconCart width={45} height={45} color={"#282832"} />;
            case 8:
                return <Icons.iconCart width={45} height={45} color={"#282832"} />;
            case 9:
                return <Icons.iconBrokenHearth width={45} height={45} color={"#282832"} />;
            case 10:
                return <Icons.iconBag width={45} height={45} color={"#282832"} />;
            default:

                return null;
        }
    }

    let [notifys, setNotifys] = React.useState<any[]>([]);  // Inicialize como array vazio

    const getProduct = async () => {
        const token = await getToken();
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };

        axios.get(`${process.env.API_URL}/user/notification`, config)
            .then((response) => {
                setNotifys(response.data.notifications);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handlePress = (notify: any) => {
        if (notify.type >= 4) {
            let addonsJson = JSON.parse(notify.addons);
            navigation.navigate('Product', {
                idProduct: addonsJson.id_product
            });
        } else if (notify.type == 2) {
            navigation.navigate('UserConfig');
        }
    };

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
                <Text style={[styles.text_top, defaultStyle.text_black]}>Notificações</Text>
                {notifys.map((notify: any) => (
                    <TouchableOpacity key={notify.id} onPress={() => handlePress(notify)}>
                        <View style={styles.content_container}>
                            <View style={styles.btn_bot}>
                                {iconNotify(notify.type)}
                                <View style={styles.text_view}>
                                    <Text style={[styles.text_bot, defaultStyle.text_black]}>{notify.title}</Text>
                                    <Text style={[styles.text_small, defaultStyle.text_black]}>{notify.message}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </Pressable>
    );
}

export default Notify;
