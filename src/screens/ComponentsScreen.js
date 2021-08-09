import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const name = 'Kristian Naess';

  return (
    <View>
      <Text style={styles.greetingStyle}>
        Getting started with React Native!
      </Text>
      <Text style={styles.textStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingStyle: {
    fontSize: 45,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
