
import React from 'react';
import PropTypes from 'prop-types';

import {AppState, View} from 'react-native';

class OpenCloseAppHandler extends React.Component {

    /*state = {
        appState: 'inactive'
    }*/
    
    componentWillMount () {
        AppState.addEventListener('change', this.props.changeAppState);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.props.changeAppState);
    }

    render () {
        return (
            <View />
        );
    }
}

import {connect} from 'react-redux';

import {changeAppState} from './modules/appState';

const mapDispatchToProps = (dispatch) => ({
    changeAppState: (nextState) => {dispatch(changeAppState(nextState));}
});

const mapStateToProps = (state) => ({

});

const OpenCloseAppHandlerContainer = connect(mapStateToProps, mapDispatchToProps)(OpenCloseAppHandler);

export {OpenCloseAppHandlerContainer as OpenCloseAppHandler};