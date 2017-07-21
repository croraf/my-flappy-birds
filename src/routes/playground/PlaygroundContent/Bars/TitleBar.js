
import React from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

class TitleBar extends React.Component {
    render () {
        return (
            <View style={{
                width: '100%',
                height: '15%',
                top: '-15%',
                position: 'absolute',
                backgroundColor: 'black'}}>
                
                <Text style={{textAlign: 'center', paddingTop: '15%', color: 'white'}}>
                    Floppy birds
                </Text>
            
            </View>
        );
    }
}

export {TitleBar};