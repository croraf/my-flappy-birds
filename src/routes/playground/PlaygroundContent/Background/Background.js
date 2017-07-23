import React from 'react';

import {Animated, Easing, Image, View} from 'react-native';

import {CoinsWrapperContainer} from './CoinsWrapper/CoinsWrapperContainer';

import Dimensions from 'Dimensions';

let mounted = true;

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
                toValue: - Dimensions.get('window').width * 2.55,
                duration: 10000,
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

                <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
                    <Image
                        source={require('./background.png')}
                        style={{width: '255%', height: '85%', top: '0%'}} />
                    <Image
                        source={require('./background.png')}
                        style={{width: '255%', height: '85%', top: '0%'}} />
                </View>
                
                <CoinsWrapperContainer left={this.state.leftAnim}/>
            </Animated.View>
        )
    }
}

export {Background};
