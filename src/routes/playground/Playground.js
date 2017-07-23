import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import Expo from 'expo';

import {PlaygroundContent} from './PlaygroundContent/PlaygroundContent';


class Playground extends React.Component {

    render () {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    marginTop: '0%',
                    width: '100%',
                    height: '80%',
                }}>

                {this.props.appOpen ? <PlaygroundContent /> : <Text>App closed</Text>}

            </View>
        );
    }
}

export {Playground};