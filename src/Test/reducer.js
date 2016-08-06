import * as actionTypes from './actionTypes';
import Immutable from 'immutable';

const {Map} = Immutable;

const {
    TEST_ACTIONONE,
    TEST_ACTIONTWO,
    TEST_FETCHTEXTREQUEST,
    TEST_FETCHTEXTSUCCESS
    } = actionTypes;

const initialState = Map({
    actionOneText: '',
    actionTwoText: '',
    fetchTextRequest: '',
    fetchTextSuccess: '',
    fetchDate: ''
});

export default (state = initialState, action) => {
    switch (action.type) {
        case TEST_ACTIONONE:
            return state.update(
                newState => newState.set('actionOneText', action.text)
            );
        case TEST_ACTIONTWO:
            return state.update(
                newState => newState.set('actionTwoText', action.text)
            );
        case TEST_FETCHTEXTREQUEST:
            return state.update(
                newState => newState.set('fetchTextRequest', action.text)
            );
        case TEST_FETCHTEXTSUCCESS:
            return state.update(
                newState => newState
                    .set('fetchTextSuccess', action.text)
                    .set('fetchDate', action.date)
            );
        default:
            return state;

    }
}