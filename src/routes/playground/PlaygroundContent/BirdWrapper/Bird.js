import React from 'react';
import PropTypes from 'prop-types';

import { Animated } from 'react-native';

class Bird extends React.Component {

    state = {
        fadeAnim: new Animated.Value(0),
        leftAnim: new Animated.Value(10),
        topAnim: new Animated.Value(0),
        springMotion: null,
    }

    springMotion = () => {
        this.state.springMotion = Animated.spring(
            this.state.topAnim, {toValue: 10, friction: -1.0/3.0, tension: -15}            
        );

        this.state.springMotion.start();
    };

    componentDidMount() {
        Animated.timing( this.state.fadeAnim, { toValue: 1, duration: 5000, }).start();

        Animated.timing( this.state.leftAnim, { toValue: 70, duration: 5000 }).start();

        this.springMotion(10);
    }


    render () {
        return (
                        
            <Animated.Image 
                style={{
                    position: 'relative',
                    width: 45,
                    height: 45,
                    left: this.state.leftAnim,
                    opacity: this.state.fadeAnim,
                    top: this.state.topAnim,
                }}
                
                source={require('./bird-icon2.png')}
            />
        );
    }
}

export {Bird};