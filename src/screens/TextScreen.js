import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const TextScreen = () => {
  const [password, onChangePassword] = useState('');

  return (
    <View>
      <Text>Enter Password: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangePassword}
        value={password}
      />
      <Text>
        {' '}
        {password.length < 5
          ? 'Password must be longer than 5 characters'
          : ''}{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextScreen;
