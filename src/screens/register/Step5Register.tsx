import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import defaultStyle from '@components/DefaultStyle'
import HeaderNavigation from '@components/HeaderNavigation';
import Svg, { Path } from 'react-native-svg';
import svg_icon from '@components/SvgIcons';

import styles from '@styles/step4Style'

function Step4Register({ navigation, route }: any): React.JSX.Element {

    const { user_name, user_birthdate, user_email, user_phone, user_password, verifyCode } = route.params;

    const [isDisabled, setDisabled] = React.useState<boolean>(true);
    const [inputValues, setInputValues] = React.useState({ input1: 0, input2: 0, input3: 0, input4: 0 });

    const input1Ref = useRef<TextInput>(null);
    const input2Ref = useRef<TextInput>(null);
    const input3Ref = useRef<TextInput>(null);
    const input4Ref = useRef<TextInput>(null);

    const handleChangeText = (name: string, value: string): void => {

        setInputValues({
            ...inputValues,
            [name]: value,
        });

        switch (name) {
            case 'input1':
                if (value.length === 1) {
                    input2Ref.current!.focus();
                }
                break;
            case 'input2':
                if (value.length === 1) {
                    input3Ref.current!.focus();
                } else {
                    input1Ref.current!.focus();
                }
                break;
            case 'input3':
                if (value.length === 1) {
                    input4Ref.current!.focus();
                } else {
                    input2Ref.current!.focus();
                }
                break;
            default:
                if (value.length != 1) {
                    input3Ref.current!.focus();
                }
        }
    };

    React.useEffect(() => {
        let code = inputValues.input1 + inputValues.input2 + inputValues.input3 + inputValues.input4
        if (code == verifyCode) {
            setDisabled(false);
            return
        }
        setDisabled(true);
    }, [handleChangeText])

    return (
        <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
            {/* Header Personalizado */}
            <View style={styles.containerHeader}>

                <TouchableOpacity
                    style={styles.iconHeader}
                    onPress={() => {
                        // @ts-ignore
                        navigation.navigate("Step4Register", {
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
                        onChangeText={(text) => handleChangeText('input1', text)}
                    />

                    <TextInput
                        ref={input2Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText('input2', text)}
                    />


                    <TextInput
                        ref={input3Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText('input3', text)}
                    />

                    <TextInput
                        ref={input4Ref}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeText('input4', text)}
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

export default Step4Register;


