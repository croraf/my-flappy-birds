import React from 'react';

import {Image, View, Animated, Easing} from 'react-native';

var Dimensions = require('Dimensions');

class Background extends React.Component {

    state = {
        leftAnim: new Animated.Value(0),
        leftOffset: 0
    }

    cyclicBackgroundMoving = () => {

        this.state.leftOffset -= 200;

        Animated.timing(
            this.state.leftAnim,
            {
                toValue: this.state.leftOffset,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => {this.cyclicBackgroundMoving();});
    }

    componentDidMount() {
        this.cyclicBackgroundMoving();
    }

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
            <Animated.View style={{flex:1,flexDirection:'row', position: 'relative', left: this.state.leftAnim}}>
                {
                    images.map((img,i) => {return img;})
                }
            </Animated.View>
        )
    }
}

export {Background};
