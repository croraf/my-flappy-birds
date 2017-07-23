import React from 'react';
import PropTypes from 'prop-types';

import SpriteImages from './SpriteImages';
import {View} from 'react-native';

let spriteLoop;

class MyBirdSprite extends React.Component {

    constructor () {
        super();
        this.state = {
            birdState: 0
        };
    }

    componentDidMount () {
        spriteLoop = setInterval(()=>{this.setState({ birdState: (this.state.birdState + 1) % 4 })}, 200);
    }

    componentWillUnmount () {
        console.log(spriteLoop);
        clearInterval(spriteLoop);
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