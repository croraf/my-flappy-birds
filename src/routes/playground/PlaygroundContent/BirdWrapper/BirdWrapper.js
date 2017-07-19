import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import {Bird} from './Bird';

class BirdWrapper extends React.Component {
    render () {
        return (
            <View style={{width: '100%', height: '100%', top: '0%', position: 'absolute', zIndex: 100, backgroundColor: 'transparent'}}>
                <Bird />
            </View>
        );
    }
}

export {BirdWrapper};