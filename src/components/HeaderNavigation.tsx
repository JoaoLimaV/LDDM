import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import defaultStyle from './DefaultStyle';
import svg_icon from './SvgIcons';

interface HeaderNavigationProps {
    backScreen: string;
    title: string;
    icon: {
        viewBox: '',
        fill: '',
        d: ''
    };
}

function HeaderNavigation({ backScreen, title, icon }: HeaderNavigationProps) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                    // @ts-ignore
                    navigation.navigate(backScreen);
                }}
            >
                <Svg viewBox={svg_icon.arrow_left.viewBox}>
                    <Path fill={svg_icon.arrow_left.fill} d={svg_icon.arrow_left.d} />
                </Svg>
            </TouchableOpacity>
            {title || icon &&
                title ? (
                <Text style={[styles.title_text, defaultStyle.text_black]}> {title} </Text>
            ) : (
                <TouchableOpacity
                    style={styles.icon}
                >
                    <Svg viewBox={icon.viewBox}>
                        <Path fill={icon.fill} d={icon.d} />
                    </Svg>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles: any = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    icon: {
        width: 30,
        height: 30
    },
    title_text: {
        fontSize: 18
    }
});

export default HeaderNavigation;


