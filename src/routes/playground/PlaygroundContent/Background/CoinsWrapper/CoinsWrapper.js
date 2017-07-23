import React from 'react';
import PropTypes from 'prop-types';

import { Animated, View, Text} from 'react-native';

import {Coin} from './Coin';

let coinsCreator;

class CoinsWrapper extends React.Component {

    state = {
    }

    componentDidMount() {
        coinsCreator = setInterval(()=>{this.props.refreshCoins(this.props.left);}, 1000);
    }
    componentWillUnmount() {
        coinsCreator.clearInterval();
    }

    render () {
        console.log('coins wrapper');
        return (

            <View style={{width: '255%', height: '85%', position: 'absolute', zIndex: 110}}>
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