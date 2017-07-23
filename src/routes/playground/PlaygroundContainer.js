import {connect} from 'react-redux';

import {Playground} from './Playground';

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state) => ({
    appOpen: state.appState === 'active'
});

const PlaygroundContainer = connect(mapStateToProps, mapDispatchToProps)(Playground);

export {PlaygroundContainer};