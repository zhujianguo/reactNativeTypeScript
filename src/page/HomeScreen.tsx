/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {View, Text, Button} from 'react-native';
import * as Https from '../uitls/Https';
interface Props {
  navigation: any;
}

interface State {}

export default class HomeScreen extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.initData();
  }

  initData = async () => {
    const result = await Https.get(
      'http://facebook.github.io/react-native/movies.json',
    );
  };

  render() {
    const {navigation} = this.props;
    console.log('navigation====', navigation);
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
}
