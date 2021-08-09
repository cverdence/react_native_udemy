import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friends = [
    {name: 'Friend #1', age: 12},
    {name: 'Friend #2', age: 12},
    {name: 'Friend #3', age: 15},
    {name: 'Friend #4', age: 17},
    {name: 'Friend #5', age: 11},
    {name: 'Friend #6', age: 13},
    {name: 'Friend #7', age: 22},
    {name: 'Friend #8', age: 32},
    {name: 'Friend #9', age: 18},
  ];

  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({item}) => {
        return (
          <Text style={styles.textStyles}>
            {item.name} is {item.age} years old
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 20,
    marginVertical: 50,
  },
});

export default ListScreen;
