import React from 'react';
import PropTypes from 'prop-types';

import {View, Image} from 'react-native';

class TiledImages extends React.Component {

    shouldComponentUpdate () {
        return false;
    }

    render () {
        return (
            
            <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
                <Image
                    source={require('./background.png')}
                    style={{width: '255%', height: '85%', top: '0%'}} />
                <Image
                    source={require('./background.png')}
                    style={{width: '255%', height: '85%', top: '0%'}} />
            </View>
        );
    }
}

export {TiledImages};