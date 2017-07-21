import React from 'react';
import PropTypes from 'prop-types';

import {View} from 'react-native';

import {BirdWrapper} from './BirdWrapper/BirdWrapper';

/*import {CoinsWrapper} from './CoinsWrapper/CoinsWrapper';*/

class Frontground extends React.Component {
    render () {
        return (
            <View style={{width: '100%', height: '100%'}}>
                {/*<CoinsWrapper />*/}
                <BirdWrapper />
            </View>
        );
    }
}

export {Frontground};