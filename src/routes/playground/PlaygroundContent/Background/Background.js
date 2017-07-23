import React from 'react';

import {Animated, Easing, Image, View} from 'react-native';

import {CoinsWrapperContainer} from './CoinsWrapper/CoinsWrapperContainer';

import Dimensions from 'Dimensions';

let mounted = true;

import {TiledImages} from './TiledImages';

const maxOffset = - Dimensions.get('window').width * 2.55;

class Background extends React.Component {

    state = {
        leftAnim: new Animated.Value(0),
    }

    cyclicBackgroundMoving = () => {

        if (!mounted) return;

        this.state.leftAnim.setValue(0);

        Animated.timing(
            this.state.leftAnim,
            {
                toValue: maxOffset,
                duration: 14000,
                easing: Easing.linear
            }
        ).start(() => {this.cyclicBackgroundMoving();});
    }

    componentDidMount() {
        mounted = true;
        this.cyclicBackgroundMoving();
    }

    componentWillUnmount() {
        mounted = false;
    }

    render () {

        return (
            <Animated.View style={{width: '100%', height: '100%', position: 'absolute', left: this.state.leftAnim}}>

                <TiledImages />
                
                {/*<CoinsWrapperContainer leftAnim={this.state.leftAnim}/>*/}

            </Animated.View>
        )
    }
}

export {Background};
