import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const HomeScreen = ({ route, navigation }) => {
  const { userData } = route.params;
  const staticVariable = useSelector((state) => state.staticVariable);
  const dispatch = useDispatch();

  // Rest of your code...

  const updateStaticVariable = () => {
    dispatch({ type: 'SET_STATIC_VARIABLE', payload: 'New Value' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Our Store</Text>
      <Text style={styles.staticVariable}>{staticVariable}</Text>
      <TouchableOpacity onPress={updateStaticVariable}>
        <Text>Update Static Variable</Text>
      </TouchableOpacity>
      {/* Rest of your code... */}
    </View>
  );
};

const styles = StyleSheet.create({
  // Your styles...
  staticVariable: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default HomeScreen;
