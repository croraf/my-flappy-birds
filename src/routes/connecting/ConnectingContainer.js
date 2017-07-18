
import {connect} from 'react-redux';

import {Connecting} from './Connecting';
import {connectToWebsocket} from './connectToWebsocket';

const mapDispatchToProps = (dispatch) => ({
    connectToWebsocket: (data) => {dispatch(connectToWebsocket(data));}
});

const mapStateToProps = (state) => ({
    lastMessage: state.websocket.message,
    connecting: state.websocket.connecting,
    connected: state.websocket.connected
});

const ConnectingContainer = connect(mapStateToProps, mapDispatchToProps)(Connecting);

export {ConnectingContainer};