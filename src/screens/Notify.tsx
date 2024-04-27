import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Pressable, Keyboard, ScrollView } from 'react-native';
import defaultStyle from '@components/DefaultStyle';
import HeaderNavigation from '@components/HeaderNavigation';
import Icons from '@icons/svgs';

import styles from '@styles/notifyStyle'

function Notify({ navigation }: any): React.JSX.Element {
    return (
        <Pressable style={defaultStyle.main_container} onPress={Keyboard.dismiss}>
            <HeaderNavigation backScreen={'Main'} title='' icon={{ viewBox: '', fill: '', d: '' }} />

            <View style={styles.container_top}>
                <TouchableOpacity>
                    <Image
                        style={{ width: 100, height: 90 }}
                        source={require('@images/foto.png')}
                    />
                </TouchableOpacity>
            </View>

        </Pressable>
    );
}

export default Notify;


