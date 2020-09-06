import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default ({ setAuthenticated }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => setAuthenticated(true)}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};
