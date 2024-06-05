import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import { RadioButton } from 'react-native-paper';
import HeaderNavigation from '@components/HeaderNavigation';
import Toast from 'react-native-toast-message';
import { ToastShow, styleToast } from '@components/Toast'
import { useFocusEffect } from '@react-navigation/native';
import styles from '@styles/meusLances'
import axios from 'axios';
import Loading from '@components/Loading';
import { getToken } from '@components/AuthStorage'
import Spinner from 'react-native-loading-spinner-overlay';
import Accordion from '@components/Accordion';

function MeusLances({ navigation, route }: any): React.JSX.Element {

    const [openModal, setOpenModal] = React.useState<boolean>(true);
    const [products, setProducts] = React.useState<any>([]);

    const opendImgModal = async () => {
        setOpenModal(true)
    };

    const closeImgModal = async () => {
        setOpenModal(false)
    };

    const getProducts = async () => {

        const token = await getToken();

        let config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        };

        axios.get(`${process.env.API_URL}/getProductsByCustomer`, config)
            .then((response) => {
                setProducts(response.data.produtos)
                closeImgModal()
                console.log(response.data.produtos.history_bid)
            })
            .catch((error) => {
                console.error(error)
            });
    }

    useFocusEffect(
        React.useCallback(() => {
            getProducts();
        }, [])
    );

    return (
        <View style={defaultStyle.main_container}>
            <HeaderNavigation
                backScreen={'Settings'}
                title=""
                icon={{ viewBox: '', fill: '', d: '' }}
            />

            <Text style={[styles.text_principal, defaultStyle.text_black]}> Meus lances </Text>
            <ScrollView style={[styles.scroll_view]}>

                {products.length == 0 ? (
                    <Text style={[defaultStyle.text_black, { fontSize: 18 }]}> Você ainda não realizou nenhum lance </Text>
                ) : (
                    products.map((product: any, index: any) => (
                        <View style={styles.div_lance} key={index}>
                            <Text style={[defaultStyle.text_black, { fontSize: 20 }]}> {product.name} </Text>

                            <View style={styles.imgPrinc}>
                                <Image source={{ uri: product.images[0] }} style={styles.image} />
                            </View>

                            <View style={{ width: '100%' }}>
                                {product.history_bid.map((bid: any, key: any) => (
                                    <Accordion
                                        key={key}
                                        title={`Lance: R$ ${bid.price.toFixed(2)}`}
                                        data={new Date(bid.bid_created_at).toLocaleDateString('pt-BR')}
                                        hora={new Date(bid.bid_created_at).toLocaleTimeString('pt-BR')}
                                        price={bid.price}
                                        percentage={bid.percentage}
                                    />
                                ))}
                            </View>
                        </View>
                    ))
                )}



            </ScrollView>

            <Toast config={styleToast} />
            {openModal &&
                <View style={[defaultStyle.modal]} >
                    <Spinner
                        visible={true}
                    />
                </View>
            }

        </View>
    );
}

export default MeusLances;


