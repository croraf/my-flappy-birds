import React from 'react';
import PropTypes from 'prop-types';


import {Image, View} from 'react-native';
var Dimensions = require('Dimensions');

class TiledImages extends React.Component {
    render () {

        var images = [],  
            imgWidth = 7,
            winWidth = Dimensions.get('window').width;
        for(var i=0;i<Math.ceil(winWidth / imgWidth);i++){
            images.push((
                <Image
                    source={require('./background.png')}
                    style={{width: '255%', height: '85%', top: '0%'}}
                    key={i}>
                </Image>
            ))
        }
    
        return (
            <View style={{flex:1, flexDirection:'row', width: '100%', height: '100%'}}>
                {
                    images.map((img, i) => {return img;})
                }
            </View>
        );
    }
}

export {TiledImages};