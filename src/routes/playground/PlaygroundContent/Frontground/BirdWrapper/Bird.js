import React from 'react';
import PropTypes from 'prop-types';

import { Animated, TouchableNativeFeedback, Easing} from 'react-native';
import AnimatedSprite from 'react-native-animated-sprite';

import {birdSprite} from './sprites/birdSprite';

import {MyBirdSprite} from './sprites/MyBirdSprite';

let springMotion = null;

class Bird extends React.Component {

    state = {
        fadeAnim: new Animated.Value(0),
        leftAnim: new Animated.Value(-50),
        topAnim: new Animated.Value(0),
    }

    springMotion = () => {
        springMotion = Animated.spring(
            this.state.topAnim, {toValue: 10, friction: -1.0/3.0, tension: -15}            
        );

        springMotion.start();
    };

    componentDidMount() {
        Animated.timing( this.state.fadeAnim, { toValue: 1, duration: 5000, easing: Easing.linear}).start();

        Animated.timing( this.state.leftAnim, { toValue: 50, duration: 5000 }).start();

        this.springMotion(10);
    }

    componentWillUnmount() {
        springMotion.stop();
    }


    render () {
        return (
            
            <Animated.View style={{
                position: 'absolute',
                zIndex: 100,
                width: 52,
                height: 50,
                left: this.state.leftAnim,
                opacity: this.state.fadeAnim,
                top: this.state.topAnim
            }}>

                {/*<AnimatedSprite
                    ref={'birdRef'}
                    sprite={birdSprite}
                    animationFrameIndex={[0,1,2,3]}
                    loopAnimation={true}
                    coordinates={{
                        top: 3,
                        left: 0,
                    }}
                    size={{
                        width: 52,
                        height: 45,
                    }}
                    style={{zIndex: 100}}
                    onPress={this.props.onPress} />*/}

                    <MyBirdSprite />

            </Animated.View>
            
        );
    }
}

export {Bird};

/*<TouchableNativeFeedback onPress={this.props.onPress}>

                <Animated.Image 
                    style={{
                        position: 'absolute',
                        width: 45,
                        height: 45,
                        left: this.state.leftAnim,
                        opacity: this.state.fadeAnim,
                        top: this.state.topAnim,
                        borderWidth: 1,
                        borderColor: 'black'
                    }}
                    
                    source={require('./sprites/Frame-1.png')}
                />*/