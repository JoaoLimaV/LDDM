import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';

import styles from '@styles/step4Style'

function Step4Register({ navigation }: any): React.JSX.Element {
    1
    const input1Ref = useRef<TextInput>(null);
    const input2Ref = useRef<TextInput>(null);
    const input3Ref = useRef<TextInput>(null);
    const input4Ref = useRef<TextInput>(null);

    const handleChangeText = (index: number, text: string) => {
        switch (index) {
            case 1:
                if (text.length === 1) {
                    input2Ref.current!.focus();
                }
                break;
            case 2:
                if (text.length === 1) {
                    input3Ref.current!.focus();
                } else {
                    input1Ref.current!.focus();
                }
                break;
            case 3:
                if (text.length === 1) {
                    input4Ref.current!.focus();
                } else {
                    input2Ref.current!.focus();
                }
                break;
            default:
                if (text.length != 1) {
                    input3Ref.current!.focus();
                }
        }
    };

    return (
        <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
            <HeaderNavigation backScreen={'Step3Register'} title='' icon={{ viewBox: '', fill: '', d: '' }} />
            
            <View style={styles.container_input}>
                <Text style={[styles.text_principal, defaultStyle.text_black]}>
                    Verificação
                </Text>

                <Text style={[styles.text_second, defaultStyle.text_black]}>
                    Uma código de  verificação foi enviada para você via e-mail ou  SMS. Informe o código abaixo. Após confimação sua conta será ativada.
                </Text>

                <View style={styles.div_input}>

                    <TextInput
                        ref={input1Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText(1, text)}
                    />

                    <TextInput
                        ref={input2Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText(2, text)}
                    />


                    <TextInput
                        ref={input3Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText(3, text)}
                    />

                    <TextInput
                        ref={input4Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText(4, text)}
                    />
                </View>
            </View>

            <View style={styles.container_btn_login}>
                <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue]}
                    onPress={() => {
                        navigation.navigate('Step5Register');
                    }}
                >
                    <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Avançar </Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
}

export default Step4Register;


