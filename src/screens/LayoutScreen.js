import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const LayoutScreen = () => {
  return (
    <View style={styles.viewParentStyle}>
      <Text style={styles.lineOneStyle}>App</Text>
      <View style={styles.lineTwoStyle}>
        <View style={styles.lineTwoBoxOneStyle} />
        <View style={styles.lineTwoBoxTwoStyle} />
      </View>
      <View style={styles.lineThreeStyle}>
        <View style={styles.lineThreeBoxOneStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewParentStyle: {
    height: 300,
  },
  lineOneStyle: {
    fontSize: 15,
    borderWidth: 3,
    borderColor: 'black',
    flex: 1,
  },
  lineTwoStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineTwoBoxOneStyle: {
    borderWidth: 2,
    borderColor: 'red',
    backgroundColor: 'red',
    width: 100,
  },
  lineTwoBoxTwoStyle: {
    borderWidth: 2,
    borderColor: 'purple',
    backgroundColor: 'purple',
    width: 100,
  },
  lineThreeStyle: {
    flex: 1,
  },
  lineThreeBoxOneStyle: {
    borderWidth: 2,
    borderColor: 'green',
    backgroundColor: 'green',
    flex: 1,
    width: 100,
    alignSelf: 'center',
  },
});

export default LayoutScreen;
