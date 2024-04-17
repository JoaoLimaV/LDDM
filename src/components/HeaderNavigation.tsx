import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import defaultStyle from './DefaultStyle';

interface HeaderNavigationProps {
    backScreen: string;
    title: string;
}

function HeaderNavigation({ backScreen, title }: HeaderNavigationProps) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                    navigation.navigate(backScreen);
                }}
            >
                <Svg viewBox="0 0 320 512">
                    <Path fill="#282832" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </Svg>
                {/* <Svg viewBox="0 0 320 512">
                    <Path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                </Svg> */}
            </TouchableOpacity>
            {/* <Text style={[styles.title_text, defaultStyle.text_black]}> Voltar </Text> */}

        </View>
    );
}

const styles: any = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon: {
        width: 35,
        height: 35
    },
    title_text: {
        fontSize: 20
    }
});

export default HeaderNavigation;


