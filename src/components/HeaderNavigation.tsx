import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import defaultStyle from '@components/DefaultStyle';
import Icons from '@icons/svgs';

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
                <Icons.iconLeftArrow width={30} height={30} color='#282832'/>
            </TouchableOpacity>
            {title || icon &&
                title ? (
                <Text style={[styles.title_text, defaultStyle.text_black]}> {title} </Text>
            ) : (
                <TouchableOpacity
                    style={styles.icon}
                >
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


