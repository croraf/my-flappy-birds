import React from 'react';
import { StyleSheet, View } from 'react-native';

/*import {ConnectingContainer} from './routes/connecting/ConnectingContainer';*/
import {PlaygroundContainer} from './routes/playground/PlaygroundContainer'

import {store} from './store';
import { Provider } from 'react-redux'

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

const container = {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
};

class Main extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={container}>
          {/*<ConnectingContainer />*/}
          <PlaygroundContainer />
        </View>
      </Provider>
    );
  }
}


export {Main};