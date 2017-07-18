
let ws;
let store;

const webSocketConnect = (host) => {

    try {
        // Let us open a web socket
        ws = new WebSocket('wss://' + host);

        console.log("WebSocket is supported in your environment!");

        ws.onopen = () => {
            store = require('../../../store').store;
            console.log("Websocket is open");
        };

        ws.onmessage = (evt) => {
            const received_msg = evt.data;
            console.log("Message is received: " + received_msg);
            store.dispatch({
                type: 'MESSAGE_RECEIVED',
                message: received_msg
            });
        };

        ws.onclose = () => {
            console.log("Connection is closed...");
            store.dispatch({type: 'DISCONNECTED'});
        };

    } catch (ex) {

        // The browser doesn't support WebSocket
        console.log("WebSocket NOT supported in your environment!");
    }
}

const webSocketSend = (message) => {
    // Web Socket is connected, send data using send()
    ws.send(message);
    console.log("Message is sent: " + message);
};

const webSocketDisconnect = () => {
    ws.close();
}

export {
    webSocketConnect, webSocketSend, webSocketDisconnect
};