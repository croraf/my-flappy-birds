import React from 'react';
import {Main} from './src/Main';

import {BackHandler} from 'react-native';

export default class App extends React.Component {

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', () => {

        console.log('back pressed2');
        /*BackHandler.exitApp();*/
    });
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {

    return (
      <Main />
    );
  }
}

/*AppRegistry.registerComponent('aaa', () => App);*/
