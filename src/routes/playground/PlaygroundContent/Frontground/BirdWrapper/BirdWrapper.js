import React from 'react';
import PropTypes from 'prop-types';

import { Animated, View, TouchableNativeFeedback } from 'react-native';

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
            this.state.topContainerAnim, { toValue: 10000, duration: 40000 }
        );

        this.state.topContainerAnim.addListener((value) => {
            /*console.log(value);*/
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

        console.log('rafa');

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
            <TouchableNativeFeedback 
                onPress={this._onPressButton}
                background={TouchableNativeFeedback.SelectableBackgroundBorderless()}>
                <View style={{width: '100%', height: '100%', position: 'absolute', zIndex: 100}}>
                    <Animated.View style={{
                        top: this.state.topContainerAnim,
                        zIndex: 100,
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        width: '100%',
                        height: '100%'
                    }}>

                        
                        <Bird onPress={this._onPressButton} />

                    </Animated.View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export {BirdWrapper};