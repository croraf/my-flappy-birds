import React from 'react';
import PropTypes from 'prop-types';

import { Animated, View, Text} from 'react-native';


class Coin extends React.Component {

    state = {
    }

    componentDidMount() {
    }


    render () {

        return (

            <Text style={{
                    position: 'absolute',
                    left: this.props.left,
                    top: this.props.top,
                    color: 'gold',
                    fontSize: 30}}>
                
                O
            </Text> 
        );
    }
}

export {Coin};