import React, { useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard } from 'react-native';
import DefaultStyle from '../../components/DefaultStyle'
import HeaderNavigation from '../../components/HeaderNavigation';


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
        <Pressable style={DefaultStyle.main_container} onPress={Keyboard.dismiss}>
            <HeaderNavigation backScreen={'Step2Register'} title='' />

            <View style={styles.container_input}>
                <Text style={[styles.text_principal, DefaultStyle.text_black]}>
                    Verificação
                </Text>

                <Text style={[styles.text_second, DefaultStyle.text_black]}>
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
                <TouchableOpacity style={[DefaultStyle.default_btn, DefaultStyle.bg_blue]}
                    onPress={() => {
                        navigation.navigate('Step5Register');
                    }}
                >
                    <Text style={[DefaultStyle.btn_text, DefaultStyle.text_white]}> Avançar </Text>
                </TouchableOpacity>
            </View>
        </Pressable>
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
    text_second: {
        fontSize: 20,
        width: '100%',
        textAlign: 'left'
    },

    div_input: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 5,
    },
    input: {
        width: '20%',
        height: 75,
        borderWidth: 2,
        borderColor: '#282832',
        color: '#282832',
        fontSize: 20,
        textAlign: 'center',
        borderRadius: 10,
    },

    container_btn_login: {
        flex: .15,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Step4Register;


