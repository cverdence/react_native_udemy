import React, {useReducer} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ChangingColorDetail from '../components/ChangingColorDetail';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return !(
        state.red + action.payload > 255 || state.red + action.payload < 0
      )
        ? {...state, red: state.red + action.payload}
        : state;
    case 'change_green':
      return !(
        state.green + action.payload > 255 || state.green + action.payload < 0
      )
        ? {...state, green: state.green + action.payload}
        : state;
    case 'change_blue':
      return !(
        state.blue + action.payload > 255 || state.blue + action.payload < 0
      )
        ? {...state, blue: state.blue + action.payload}
        : state;
    default:
      return state;
  }
};

const ChangingColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  const {red, green, blue} = state;

  return (
    <View>
      <View>
        <Text>Change Color Screen</Text>
        <ChangingColorDetail
          onIncrease={() =>
            dispatch({type: 'change_red', payload: COLOR_INCREMENT})
          }
          onDecrease={() =>
            dispatch({type: 'change_red', payload: -COLOR_INCREMENT})
          }
          color={'Red'}
        />
        <ChangingColorDetail
          onIncrease={() =>
            dispatch({type: 'change_green', payload: COLOR_INCREMENT})
          }
          onDecrease={() =>
            dispatch({type: 'change_green', payload: -COLOR_INCREMENT})
          }
          color={'Green'}
        />
        <ChangingColorDetail
          onIncrease={() =>
            dispatch({type: 'change_blue', payload: COLOR_INCREMENT})
          }
          onDecrease={() =>
            dispatch({type: 'change_blue', payload: -COLOR_INCREMENT})
          }
          color={'Blue'}
        />
      </View>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangingColorScreen;
