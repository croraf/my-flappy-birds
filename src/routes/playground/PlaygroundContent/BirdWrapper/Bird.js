import React from 'react';
import PropTypes from 'prop-types';

import { Animated, Text, View, TextInput, Button, Image, TouchableNativeFeedback  } from 'react-native';

class Bird extends React.Component {

    state = {
        fadeAnim: new Animated.Value(0),
        leftAnim: new Animated.Value(10),
        topAnim: new Animated.Value(0),
        toValue: 0,
        springMotion: null,
        topContainerAnim: new Animated.Value(0),
        fallingMotion: null,
        topOffset: 0,
        touchEnabled: true
    }

    springMotion = () => {
        this.state.springMotion = Animated.spring(
            this.state.topAnim, {toValue: 10, friction: -1.0/3.0, tension: -15}            
        );

        this.state.springMotion.start();
    };

    fallingMotion = () => {
        this.state.fallingMotion = Animated.timing(
            this.state.topContainerAnim, { toValue: 10000, duration: 60000 }
        );

        this.state.topContainerAnim.addListener((value) => {
            console.log(value);
            this.state.topOffset = value.value;
            if (value.value > 320) {
                this.state.fallingMotion.stop();
                this.state.topContainerAnim.setValue(320);
            }
        });
    }


    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 5000,              // Make it take a while
            }
        ).start();                        // Starts the animation

        Animated.timing(
            this.state.leftAnim,
            {
                toValue: 70,
                duration: 5000,
            }
        ).start();

        this.fallingMotion();
        
        this.state.fallingMotion.start();

        this.springMotion(10);
    }

    _onPressButton = () => {

        if (!this.state.touchEnabled) return;

        this.state.touchEnabled = false;

        this.state.fallingMotion.stop();

        Animated.timing(
            this.state.topContainerAnim,
            {
                toValue: this.state.topOffset - 50,
                duration: 500,
            }
        ).start(() => {
            this.state.fallingMotion.start();
            this.state.touchEnabled = true;
        });
    }

    render () {
        return (
            <Animated.View style={{
                top: this.state.topContainerAnim,
            }}>

                <TouchableNativeFeedback  
                    onPress={this._onPressButton}>
            
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
                        
                </TouchableNativeFeedback>

            </Animated.View>
        );
    }
}

export {Bird};