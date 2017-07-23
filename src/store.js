
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import {connectToWebsocketReducer} from './routes/connecting/connectToWebsocket';
import {appStateReducer} from './modules/appState';
import {coinsReducer, createCoin, deleteCoin} from './modules/coins';

const store = createStore(
    combineReducers({
        websocket: connectToWebsocketReducer,
        coins: coinsReducer,
        appState: appStateReducer
    }),
    applyMiddleware(thunkMiddleware)
);

export {store};