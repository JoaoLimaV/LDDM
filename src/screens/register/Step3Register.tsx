import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';
import svg_icon from '@components/SvgIcons';
import Svg, { Path } from 'react-native-svg';

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

const styles: any = StyleSheet.create({
    container_input: {
        flex: .85,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20
    },
    text_principal: {
        fontSize: 28,
        width: '100%',
        textAlign: 'left'
    },

    div_btn_code: {
        width: '100%',
        paddingTop: 30,
    },

    btn_icon: {
        width: '100%',
        height: 80,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#D9D9D9",
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        paddingLeft: 15
    },
    icon: {
        width: 50,
        height: 50,
    },
    text_icon: {
        paddingLeft: 5,
        fontSize: 20
    }
});

export default Step3Register;


