
const createCoin = (leftOffset) => (dispatch) => {

    const offset = 300-leftOffset/2;
    console.log('offset', offset);
    dispatch({type: 'NEW_COIN', newCoin: {left: offset, top: 10 + Math.random()*60 + '%'}});

}

const deleteCoin = () => (dispatch) => {

    console.log('delete coin');
    dispatch({type: 'DELETE_COIN'});

}


var coinsReducer = (state = [{left: '50%', top: '50%'}, {left: '60%', top: '30%'},], action) => {
    switch (action.type) {
        case 'NEW_COIN':
            return [...state, action.newCoin];
        case 'DELETE_COIN':
            return state.slice(1, state.length);
        default:
            return state;
    }
}


export {coinsReducer, createCoin, deleteCoin};