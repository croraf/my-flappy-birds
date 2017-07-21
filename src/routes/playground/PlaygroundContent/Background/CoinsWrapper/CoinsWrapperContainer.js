import {connect} from 'react-redux';

import {CoinsWrapper} from './CoinsWrapper';

import {createCoin, deleteCoin} from '../../../../../modules/coins';

const mapDispatchToProps = (dispatch) => ({
    refreshCoins: (leftOffset) => {console.log(leftOffset); dispatch(createCoin(leftOffset)); dispatch(deleteCoin());}
});

const mapStateToProps = (state) => ({
    coins: state.coins
});

const CoinsWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(CoinsWrapper);

export {CoinsWrapperContainer};