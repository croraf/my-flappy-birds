import React from 'react';
import PropTypes from 'prop-types';

import {Image} from 'react-native';

class Image0 extends React.Component {

    shouldComponentUpdate () {
        return false;
    }

    render () {
        /*console.log('image0');*/
        return (
            <Image
                source={require('./Frame-1.png')}
                style={{width: 52, height: 45, top: 2}} />
        );
    }
}

class Image1 extends React.Component {
    
    shouldComponentUpdate () {
        return false;
    }

    render () {
        /*console.log('image1');*/
        return (
            <Image
                source={require('./frame-2.png')}
                style={{width: 52, height: 45, top: 2}} />
        );
    }
}

class Image2 extends React.Component {
    
    shouldComponentUpdate () {
        return false;
    }

    render () {
        /*console.log('image2');*/
        return (
            <Image
                source={require('./frame-3.png')}
                style={{width: 52, height: 45, top: 2}} />
        );
    }
}

class Image3 extends React.Component {
    
    shouldComponentUpdate () {
        return false;
    }

    render () {
        /*console.log('image3');*/
        return (
            <Image
                source={require('./frame-4.png')}
                style={{width: 52, height: 45, top: 2}} />
        );
    }
}

export {Image0, Image1, Image2, Image3};

export default [Image0, Image1, Image2, Image3];