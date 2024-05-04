import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icons from '@icons/svgs';


interface HeaderRegister {
  onNavigateBack: () => void;
}

const HeaderRegister: React.FC<HeaderRegister> = ({ onNavigateBack }) => {
  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity
        onPress={onNavigateBack}
      >
        <Icons.iconLeftArrow width={30} height={30} color='#282832'/>
      </TouchableOpacity>
    </View>
  );
};

const styles: any = StyleSheet.create({
containerHeader: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default HeaderRegister;