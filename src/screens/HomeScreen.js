import React from 'react';
import {Text, StyleSheet, Button, TouchableOpacity, View} from 'react-native';

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Welcome to the Home screen</Text>
      <Button
        title="Go to image screen"
        onPress={() => props.navigation.navigate('Image')}
      />
      <Button
        title="Go to components demo"
        onPress={() => props.navigation.navigate('Components')}
      />
      <Button
        title="Go to counter demo"
        onPress={() => props.navigation.navigate('Counter')}
      />
      <Button
        title="Go to color demo"
        onPress={() => props.navigation.navigate('Color')}
      />
      <Button
        title="Go to changing color demo"
        onPress={() => props.navigation.navigate('ChangingColor')}
      />
      <Button
        title="Go to text screen demo"
        onPress={() => props.navigation.navigate('Text')}
      />
      <Button
        title="Go to layout screen demo"
        onPress={() => props.navigation.navigate('Layout')}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('Lists')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
