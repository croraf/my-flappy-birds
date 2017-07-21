import React from 'react';

import {Animated, Easing} from 'react-native';

import {TiledImages} from './TiledImages';

import {CoinsWrapperContainer} from './CoinsWrapper/CoinsWrapperContainer';

class Background extends React.Component {

    state = {
        leftAnim: new Animated.Value(0),
        leftOffset: 0
    }

    cyclicBackgroundMoving = () => {

        this.setState({leftOffset: this.state.leftOffset - 200});

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

        return (
            <Animated.View style={{width: '100%', height: '100%', position: 'absolute', left: this.state.leftAnim}}>
                <TiledImages />
                <CoinsWrapperContainer leftOffset={this.state.leftOffset}/>
            </Animated.View>
        )
    }
}

export {Background};
