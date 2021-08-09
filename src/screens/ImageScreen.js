import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title={'forest'}
        image={require('../../assets/forest.jpg')}
        score={8}
      />
      <ImageDetail
        title={'beach'}
        image={require('../../assets/beach.jpg')}
        score={5}
      />
      <ImageDetail
        title={'mountain'}
        image={require('../../assets/mountain.jpg')}
        score={9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ImageScreen;
