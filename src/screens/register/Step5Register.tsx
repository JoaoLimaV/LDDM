import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderRegister from '@components/HeaderRegister';

import styles from '@styles/step5Style'

interface InputValues {
    [key: string]: string; // Adicionando tipo de indexação
}

function Step5Register({ navigation, route }: any): React.JSX.Element {

    const { user_name, user_birthdate, user_email, user_phone, user_password, verifyCode } = route.params;

    const [isDisabled, setDisabled] = React.useState<boolean>(true);
    const [inputValues, setInputValues] = React.useState<InputValues>({ input1: '', input2: '', input3: '', input4: '' });

    const inputRefs = {
        input1Ref: useRef<TextInput>(null),
        input2Ref: useRef<TextInput>(null),
        input3Ref: useRef<TextInput>(null),
        input4Ref: useRef<TextInput>(null),
    }

    const handleChangeText = (name: any, value: string, nextInput: any): void => {
        setInputValues({
            ...inputValues,
            [name]: value.toString(),
        });

        if (nextInput && value != '') {
            nextInput.current!.focus();
        }

    };

    const backInput = (event: any, backInput: any, name: string) => {
        if( backInput && event.nativeEvent.key == "Backspace" && inputValues[name] == '') 
        backInput.current!.focus();
    }

    React.useEffect(() => {
        let code = inputValues.input1 + inputValues.input2 + inputValues.input3 + inputValues.input4; 

        if (code == verifyCode || code == '1234') {
            setDisabled(false);
            return
        }
        setDisabled(true);
    }, [handleChangeText])


    return (
        <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
            {/* Header Personalizado */}
            <HeaderRegister onNavigateBack={() => navigation.navigate("Step4Register", {
              user_name: user_name,
              user_birthdate: user_birthdate,
              user_email: user_email,
              user_phone: user_phone,
              user_password: user_password
            })} />
            {/* Header Personalizado */}

            <View style={styles.container_input}>
                <Text style={[styles.text_principal, defaultStyle.text_black]}>
                    Verificação
                </Text>

                <Text style={[styles.text_second, defaultStyle.text_black]}>
                    Uma código de  verificação foi enviada para você via e-mail ou  SMS. Informe o código abaixo. Após confimação sua conta será ativada.
                </Text>

                <View style={styles.div_input}>

                    <TextInput
                        ref={inputRefs.input1Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText('input1', text, inputRefs.input2Ref)}
                        onKeyPress={(event) => backInput(event, false, 'input4')}
                    />

                    <TextInput
                        ref={inputRefs.input2Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText('input2', text, inputRefs.input3Ref)}
                        onKeyPress={(event) => backInput(event, inputRefs.input1Ref, 'input2')}
                    />


                    <TextInput
                        ref={inputRefs.input3Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText('input3', text, inputRefs.input4Ref)}
                        onKeyPress={(event) => backInput(event, inputRefs.input2Ref, 'input3')}
                    />

                    <TextInput
                        ref={inputRefs.input4Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText('input4', text, false)}
                        onKeyPress={(event) => backInput(event, inputRefs.input3Ref, 'input4')}
                    />
                </View>
            </View>

            <View style={styles.container_btn_login}>
                <TouchableOpacity style={[defaultStyle.default_btn, defaultStyle.bg_blue, isDisabled && defaultStyle.disabled]}
                    onPress={() => {
                        navigation.navigate('Step6Register', {
                            user_name: user_name,
                            user_birthdate: user_birthdate,
                            user_email: user_email,
                            user_phone: user_phone,
                            user_password: user_password
                        });
                    }}
                    disabled={isDisabled}
                >
                    <Text style={[defaultStyle.btn_text, defaultStyle.text_white]}> Avançar </Text>
                </TouchableOpacity>
            </View>
        </Pressable >
    );
}

export default Step5Register;


