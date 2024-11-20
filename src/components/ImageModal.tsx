import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import defaultStyle from '@components/DefaultStyle';

type ImageModalProps = {
  file: any;
  openModal: boolean;
  closeImgModal: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({ file, openModal, closeImgModal }) => {
  if (!file || !openModal) return null;

  return (
    <TouchableOpacity style={[defaultStyle.modal]} onPress={closeImgModal}>
      <View
        style={{
          width: 400,
          height: 400,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={{ uri: file.uri }}
          style={{ width: '90%', height: '90%', resizeMode: 'contain' }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ImageModal;
