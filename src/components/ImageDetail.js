import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = props => {
  return (
    <View>
      <Image source={props.image} />
      <Text style={styles.text}>Show image of {props.title}</Text>
      <Text> Image score: {props.score} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default ImageDetail;
