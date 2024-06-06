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
import AccordionProduct from '@components/AccordionProduct';

function MeusItensLeilao({ navigation, route }: any): React.JSX.Element {

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

        axios.get(`${process.env.API_URL}/getProductsByVendor`, config)
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

            <Text style={[styles.text_principal, defaultStyle.text_black]}> Meus Itens em Leilão </Text>
            <ScrollView style={[styles.scroll_view, {width: '100%'}]}>

                {products.length == 0 ? (
                    <Text style={[defaultStyle.text_black, { fontSize: 18 }]}> Você ainda não realizou nenhum lance </Text>
                ) : (
                    products.map((product: any, index: any) => (
                            <View style={{ width: '100%' }} key={index}>
                                <AccordionProduct
                                    id={product.id}
                                    nome={product.name}
                                    data={new Date(product.created_at).toLocaleDateString('pt-BR')}
                                    hora={new Date(product.created_at).toLocaleTimeString('pt-BR')}
                                    desc={product.desc}
                                    preco_inicial={product.start_price}
                                    preco_arremate={product.final_bid_price}
                                    preco_atual={product.current_price}
                                    img={product.images[0]}
                                    status={product.status_name}
                                />
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

export default MeusItensLeilao;


