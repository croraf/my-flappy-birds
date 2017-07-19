import React from 'react';
import PropTypes from 'prop-types';

class BirdInternal extends React.Component {

    state = {
        fadeAnim: new Animated.Value(0),
        leftAnim: new Animated.Value(10),
        topAnim: new Animated.Value(0),
        springMotion: null,
    }

    render () {
        return (
            null
        );
    }
}

export {BirdInternal};