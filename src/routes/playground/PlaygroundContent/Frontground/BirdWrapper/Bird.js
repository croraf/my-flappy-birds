import React from 'react';
import PropTypes from 'prop-types';

import { Animated, Easing} from 'react-native';

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

                    <MyBirdSprite />

            </Animated.View>
            
        );
    }
}

export {Bird};