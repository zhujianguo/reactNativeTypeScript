import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { ToDBC, ToCDB } from '../uitls/StringUtils';

 export default function HomeScreen({navigation}:any) {
   const str = "开思小怪兽DetailsScreen";
   const ss = ToDBC(str);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{width:210, backgroundColor:'#FF00FF'}}>{ss}</Text>
    <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
  </View>
  );
}