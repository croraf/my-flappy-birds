import React from 'react';
import { StyleSheet, View } from 'react-native';

/*import {ConnectingContainer} from './routes/connecting/ConnectingContainer';*/
import {PlaygroundContainer} from './routes/playground/PlaygroundContainer';
import {MenuWrapperContainer} from './routes/menu/MenuWrapperContainer';

import {store} from './store';
import { Provider } from 'react-redux';

import {OpenCloseAppHandler} from './OpenCloseAppHandler';

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
          
          <OpenCloseAppHandler />

          <MenuWrapperContainer />
          <PlaygroundContainer />
          
        </View>
      </Provider>
    );
  }
}


export {Main};