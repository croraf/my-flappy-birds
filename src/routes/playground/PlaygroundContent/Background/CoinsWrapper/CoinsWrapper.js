import React from 'react';
import PropTypes from 'prop-types';

import { Animated, View, Text} from 'react-native';

import {Coin} from './Coin';

class CoinsWrapper extends React.Component {

    state = {
    }

    componentDidMount() {
        
        setInterval(()=>{this.props.refreshCoins(this.props.leftOffset);}, 1000);
    }

    render () {

        return (

            <View style={{width: '100%', height: '100%', position: 'absolute', zIndex: 90}}>
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