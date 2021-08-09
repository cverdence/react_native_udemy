import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

const ChangingColorDetail = props => {
  return (
    <View>
      <Text style={styles.textStyle}>{props.color}</Text>
      <Button
        title={'More ' + props.color}
        onPress={() => props.onIncrease()}
      />
      <Button
        title={'Less ' + props.color}
        onPress={() => props.onDecrease()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
});

export default ChangingColorDetail;
