import React from 'react';
import PropTypes from 'prop-types';

import SpriteImages from './SpriteImages';
import {View} from 'react-native';

class MyBirdSprite extends React.Component {

    state = {
        birdState: 0
    }

    componentDidMount () {
        setInterval(()=>{this.setState({ birdState: (this.state.birdState + 1) % 4 })}, 200);
    }


    render () {
        const Image = SpriteImages[this.state.birdState];

        return (
            <View>
                <Image />
            </View>
        );
    }
}

export {MyBirdSprite};