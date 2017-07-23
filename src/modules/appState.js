import {playAudio, stopAudio} from './backgroundAudio/backgroundAudio';

const changeAppState = (nextAppState) => (dispatch) => {

    
    if (nextAppState === 'active') {
        console.log('App has come to the foreground!');
        playAudio();
        
    } else {
        console.log('App has gone to the background!')
        stopAudio();
    }

    dispatch({type: 'CHANGE_APP_STATE', nextAppState});
};


var appStateReducer = (state = 'closed', action) => {
    switch (action.type) {
        case 'CHANGE_APP_STATE':
            console.log('CHANGE_APP_STATE:', action.nextAppState);
            return action.nextAppState;
        default:
            return state;
    }
}

export {appStateReducer, changeAppState};
