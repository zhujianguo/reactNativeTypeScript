import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function ModalScreen({ navigation}: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    );
  }