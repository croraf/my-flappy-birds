import React from 'react';
import PropTypes from 'prop-types';


import { View } from 'react-native';

class FooterBar extends React.Component {
    render () {
        return (
            <View style={{width: '100%', height: '30%', top: '85%', position: 'absolute', backgroundColor: 'black'}}>
            </View>
        );
    }
}

export {FooterBar};