import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';
import svg_icon from '@components/SvgIcons';
import Svg, { Path } from 'react-native-svg';

import styles from '@styles/step3Style'

function Step3Register({ navigation }: any): React.JSX.Element {
    return (
        <View style={defaultStyle.main_container} >
            <HeaderNavigation backScreen={'Step2Register'} title='' icon={{viewBox: '', fill: '', d:''}} />

            <View style={styles.container_input}>
                <Text style={[styles.text_principal, defaultStyle.text_black]}>
                    Abaixo você pode escolher se deseja receber o código de 4 digitos vai SMS ou E-MAIL.
                </Text>

                <View style={styles.div_btn_code}>

                    <TouchableOpacity
                        style={styles.btn_icon}
                        onPress={() => {
                            navigation.navigate('Step4Register');
                        }}
                    >
                        <Svg style={styles.icon} viewBox={svg_icon.email.viewBox}>
                            <Path fill={svg_icon.email.fill} d={svg_icon.email.d} />
                        </Svg>
                        <Text style={[styles.text_icon, defaultStyle.text_black]}> Email </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btn_icon, defaultStyle.disabled ]}
                        onPress={() => {
                            navigation.navigate('Step4Register');
                        }}
                        disabled
                    >
                        <Svg style={styles.icon} viewBox={svg_icon.sms.viewBox}>
                            <Path fill={svg_icon.sms.fill} d={svg_icon.sms.d}/>
                        </Svg>
                        <Text style={[styles.text_icon, defaultStyle.text_black]}> SMS </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

export default Step3Register;


