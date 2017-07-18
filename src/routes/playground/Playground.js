import React from 'react';
import PropTypes from 'prop-types';

import { View, Image, Text } from 'react-native';

import {Audio} from 'expo';

import {RepeatImage} from './RepeatImage';
import {Bird} from './Bird';

class Playground extends React.Component {

    playSound = async () => {

        const soundObject = new Expo.Audio.Sound();
        try {
            await soundObject.loadAsync(require('./background.mp3'));
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
                <RepeatImage style={{position: 'absolute'}}/>
                <View style={{width: '100%', height: '15%', top: '-15%', position: 'absolute', backgroundColor: 'black'}}>
                    <Text style={{textAlign: 'center', paddingTop: '15%', color: 'white'}}>Floppy birds</Text>
                </View>
                <View style={{width: '100%', height: '100%', top: '0%', position: 'absolute', zIndex: 100, backgroundColor: 'transparent'}}>
                    <Bird />
                </View>
                <View style={{width: '100%', height: '30%', top: '85%', position: 'absolute', backgroundColor: 'black'}}>
                </View>
            </View>
        );
    }
}

export {Playground};