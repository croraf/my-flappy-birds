import React from 'react';
import PropTypes from 'prop-types';

import { Animated, View, Text} from 'react-native';

import {Coin} from './Coin';

let coinsCreator;

class CoinsWrapper extends React.Component {

    state = {
    }

    componentDidMount() {
        coinsCreator = setInterval(()=>{this.props.refreshCoins(500);}, 1000);
    }
    componentWillUnmount() {
        coinsCreator.clearInterval();
    }

    render () {

        return (

            <View style={{width: '100%', height: '100%', position: 'absolute', zIndex: 110}}>
                {this.props.coins.map((item, index) => (
                    <Coin
                        left={item.left}
                        top={item.top}
                        key={index}>
                        
                        O
                    </Coin>
                ))}

            </View>
        );
    }
}

export {CoinsWrapper};