
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import {connectToWebsocketReducer} from './routes/connecting/connectToWebsocket';
import {coinsReducer, createCoin, deleteCoin} from './modules/coins';

const store = createStore(
    combineReducers({
        websocket: connectToWebsocketReducer,
        coins: coinsReducer
    }),
    applyMiddleware(thunkMiddleware)
);

export {store};