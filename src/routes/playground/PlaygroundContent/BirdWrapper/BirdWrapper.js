import React from 'react';
import PropTypes from 'prop-types';

import { Animated, TouchableNativeFeedback  } from 'react-native';

import { Bird } from './Bird'; 

class BirdWrapper extends React.Component {

    state = {
        toValue: 0,
        topContainerAnim: new Animated.Value(0),
        fallingMotion: null,
        topOffset: 0,
        touchEnabled: true
    }

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

        this.fallingMotion();
        
        this.state.fallingMotion.start();
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
                zIndex: 100,
                backgroundColor: 'transparent',
                position: 'absolute',
                width: '100%',
                height: '100%'
            }}>

                <TouchableNativeFeedback  
                    onPress={this._onPressButton}>

                    <Bird />

                </TouchableNativeFeedback>

            </Animated.View>
        );
    }
}

export {BirdWrapper};