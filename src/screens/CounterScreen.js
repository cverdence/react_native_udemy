import React, {useReducer} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const CHANGE_PER_CLICK = 1;

const reducer = (state, action) => {
  if (action.type === 'increase' || action.type === 'decrease') {
    return {...state, count: state.count + action.payload};
  } else {
    return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <View>
      <Text style={styles.textStyles}>Counter screen</Text>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({type: 'increase', payload: CHANGE_PER_CLICK});
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type: 'decrease', payload: -CHANGE_PER_CLICK});
        }}
      />
      <Text style={styles.textStyles}>Count is {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 20,
  },
});

export default CounterScreen;
