import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import {TitleBar} from './Bars/TitleBar';
import {FooterBar} from './Bars/FooterBar';

import {Background} from './Background/Background';

import {Frontground} from './Frontground/Frontground';

class PlaygroundContent extends React.Component {
    render () {
        return (
            <View style={{width: '100%', height: '100%'}}>
                
                <TitleBar />

                <Background />
                
                <Frontground />

                <FooterBar />
                
            </View>
        );
    }
}

export {PlaygroundContent};