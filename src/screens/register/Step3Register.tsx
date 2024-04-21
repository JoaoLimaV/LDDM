import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard } from 'react-native';
import DefaultStyle from '../../components/DefaultStyle'
import HeaderNavigation from '../../components/HeaderNavigation';
import Svg, { Path } from 'react-native-svg';


function Step3Register({ navigation }: any): React.JSX.Element {
    return (
        <View style={DefaultStyle.main_container} >
            <HeaderNavigation backScreen={'Step2Register'} title='' icon={{viewBox: '', fill: '', d:''}} />

            <View style={styles.container_input}>
                <Text style={[styles.text_principal, DefaultStyle.text_black]}>
                    Abaixo você pode escolher se deseja receber o código de 4 digitos vai SMS ou E-MAIL.
                </Text>

                <View style={styles.div_btn_code}>

                    <TouchableOpacity
                        style={styles.btn_icon}
                        onPress={() => {
                            navigation.navigate('Step4Register');
                        }}
                    >
                        <Svg style={styles.icon} viewBox="0 0 512 512">
                            <Path fill="#282832" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                        </Svg>
                        <Text style={[styles.text_icon, DefaultStyle.text_black]}> Email </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btn_icon}
                        onPress={() => {
                            navigation.navigate('Step4Register');
                        }}
                    >
                        <Svg style={styles.icon} viewBox="0 0 512 512">
                            <Path fill="#282832" d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM96 212.8c0-20.3 16.5-36.8 36.8-36.8H152c8.8 0 16 7.2 16 16s-7.2 16-16 16H132.8c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.3 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h27.2c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6C102.2 236.7 96 225.2 96 212.8zM372.8 176H392c8.8 0 16 7.2 16 16s-7.2 16-16 16H372.8c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.2 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8H352c-8.8 0-16-7.2-16-16s7.2-16 16-16h27.2c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6c-10.2-6.8-16.4-18.3-16.4-30.7c0-20.3 16.5-36.8 36.8-36.8zm-152 6.4L256 229.3l35.2-46.9c4.1-5.5 11.3-7.8 17.9-5.6s10.9 8.3 10.9 15.2v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V240l-19.2 25.6c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L224 240v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-6.9 4.4-13 10.9-15.2s13.7 .1 17.9 5.6z"/>
                        </Svg>
                        <Text style={[styles.text_icon, DefaultStyle.text_black]}> SMS </Text>
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


