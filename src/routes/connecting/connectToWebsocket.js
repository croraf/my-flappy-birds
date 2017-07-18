import {webSocketConnect, webSocketSend, webSocketDisconnect} from './util/websocketUtil';

const connectToWebsocket = (data) => (dispatch) => {

    dispatch({type: 'CONNECTING', data: data});

    webSocketConnect(data.ip);

    dispatch({type: 'CONNECTED'});

    setTimeout(() => {webSocketSend("Initial test message");}, 1000);
    setTimeout(() => {webSocketSend("Initial test message2");}, 1500);
    setTimeout(() => {webSocketSend("Initial test message3");}, 2000);
    setTimeout(() => {webSocketSend("Initial test message4");}, 2500);

    setTimeout(() => {webSocketDisconnect();}, 3000);
}

const disconnectFromWebsocket = () => (dispatch) => {

    dispatch({type: 'DISCONNECTING'});

    webSocketDisconnect();
}

var connectToWebsocketReducer = (state = {message: '', connecting: false, connected: false}, action) => {
    switch (action.type) {
        case 'CONNECTING':
            console.log('Connecting to ' + 'IP: ' + action.data.ip + ', port: ' + action.data.port);
            return {message: '', connecting: true, connected: state.connected};
        case 'CONNECTED':
            console.log('Connected!');
            return {message: '', connecting: false, connected: true};
        case 'MESSAGE_RECEIVED':
            return {message: action.message, connecting: false, connected: state.connected};
        case 'DISCONNECTED':
            return {message: state.message, connecting: false, connected: false}
        default:
            return state;
    }
}

export {connectToWebsocket, connectToWebsocketReducer};