import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';
import svg_icon from '@components/SvgIcons';
import Svg, { Path } from 'react-native-svg';

import styles from '@styles/step3Style'

function Step3Register({ navigation, route }: any): React.JSX.Element {

    const { user_name, user_birthdate, user_email, user_phone, user_password } = route.params;

    return (
        <View style={defaultStyle.main_container} >
            {/* Header Personalizado */}
            <View style={styles.containerHeader}>

                <TouchableOpacity
                    style={styles.iconHeader}
                    onPress={() => {
                        // @ts-ignore
                        navigation.navigate("Step3Register", {
                            user_name: user_name,
                            user_birthdate: user_birthdate,
                            user_email: user_email,
                            user_phone: user_phone,
                            user_password: user_password,
                        });
                    }}
                >
                    <Svg viewBox={svg_icon.arrow_left.viewBox}>
                        <Path fill={svg_icon.arrow_left.fill} d={svg_icon.arrow_left.d} />
                    </Svg>
                </TouchableOpacity>
            </View>
            {/* Header Personalizado */}

            <View style={styles.container_input}>
                <Text style={[styles.text_principal, defaultStyle.text_black]}>
                    Abaixo você pode escolher se deseja receber o código de 4 digitos vai SMS ou E-MAIL.
                </Text>

                <View style={styles.div_btn_code}>

                    <TouchableOpacity
                        style={styles.btn_icon}
                        onPress={() => {
                            navigation.navigate('Step5Register', {
                                user_name: user_name,
                                user_birthdate: user_birthdate,
                                user_email: user_email,
                                user_phone: user_phone,
                                user_password: user_password,
                                verifyCode: 1234
                            });
                        }}
                    >
                        <Svg style={styles.icon} viewBox={svg_icon.email.viewBox}>
                            <Path fill={svg_icon.email.fill} d={svg_icon.email.d} />
                        </Svg>
                        <Text style={[styles.text_icon, defaultStyle.text_black]}> Email </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btn_icon, defaultStyle.disabled]}
                        disabled
                    >
                        <Svg style={styles.icon} viewBox={svg_icon.sms.viewBox}>
                            <Path fill={svg_icon.sms.fill} d={svg_icon.sms.d} />
                        </Svg>
                        <Text style={[styles.text_icon, defaultStyle.text_black]}> SMS </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

export default Step3Register;


