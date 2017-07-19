import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import Expo from 'expo';

import {PlaygroundContent} from './PlaygroundContent/PlaygroundContent';



class Playground extends React.Component {

    playSound = async () => {

        const soundObject = new Expo.Audio.Sound();
        try {
            await soundObject.loadAsync(require('./curseMusic.mp3'));
            await soundObject.playAsync();
            await soundObject.setVolumeAsync(0.3);
            await soundObject.setIsLoopingAsync(true);
            // Your sound is playing!
        } catch (error) {
        // An error occurred!
        }
    };

    componentWillMount () {

        this.playSound();
    }

    render () {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    marginTop: '0%',
                    width: '100%',
                    height: '80%',
                }}>
                <PlaygroundContent />

            </View>
        );
    }
}

export {Playground};