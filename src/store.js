
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import {connectToWebsocketReducer} from './routes/connecting/connectToWebsocket';

const store = createStore(
    combineReducers({
        websocket: connectToWebsocketReducer
    }),
    applyMiddleware(thunkMiddleware)
);


export {store};