import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderRegister from '@components/HeaderRegister';
import Icons from '@icons/svgs';
import axios from 'axios';
// import isLoading from '@components/isLoading'
import Toast, { BaseToast } from 'react-native-toast-message';

import styles from '@styles/step4Style'

function Step4Register({ navigation, route }: any): React.JSX.Element {

    const { user_name, user_birthdate, user_email, user_phone, user_password } = route.params;
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const sendVerifyCode = async () => {
        setIsLoading(true)

        Toast.show({
            type: 'success',
            text1: 'Email enviado',
            text2: 'Você será redirecionado em breve. Aguarde.',
            visibilityTime: 5000,
            onPress: () => {
                Toast.hide();
            }
        });

        await axios.get(`http://192.168.100.7:3000/sendCode/email/${user_email}`)
            .then(async (response) => {

                let code = response.data.code
                navigation.navigate('Step5Register', {
                    user_name: user_name,
                    user_birthdate: user_birthdate,
                    user_email: user_email,
                    user_phone: user_phone,
                    user_password: user_password,
                    verifyCode: code
                });
            })
            .catch(err => {
                console.error(err)
                setIsLoading(false)
            });
    }

    return (
        <View style={defaultStyle.main_container} >
            {/* Header Personalizado */}
            <HeaderRegister onNavigateBack={() => navigation.navigate("Step3Register", {
              user_name: user_name,
              user_birthdate: user_birthdate,
              user_email: user_email,
              user_phone: user_phone,
              user_password: user_password
            })} />
            {/* Header Personalizado */}

            <View style={styles.container_input}>
                <Text style={[styles.text_principal, defaultStyle.text_black]}>
                    Abaixo você pode escolher se deseja receber o código de 4 digitos vai SMS ou E-MAIL.
                </Text>

                <View style={styles.div_btn_code}>

                    <TouchableOpacity
                        style={[styles.btn_icon, isLoading && defaultStyle.disabled]}
                        onPress={() => {
                            sendVerifyCode()
                        }}
                        disabled={isLoading}
                    >
                        <Icons.iconEmail width={40} height={40} color="#282832"/>

                        <Text style={[styles.text_icon, defaultStyle.text_black]}> Email </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btn_icon, defaultStyle.disabled]}
                        disabled
                    >
                        <Icons.iconSms width={40} height={40} color="#282832"/>
                        <Text style={[styles.text_icon, defaultStyle.text_black]}> SMS </Text>
                    </TouchableOpacity>

                </View>
            </View>

            <Toast />
        </View>
    );
}

export default Step4Register;


