import { createSelector } from 'reselect';
import Immutable from 'immutable';
import * as actions from './actions';

const {Map} = Immutable;

const {
    getActionOneText,
    getActionTwoText,
    fetchText
    } = actions;

const _getActionOneText = state => Map.isMap(state.test) ? state.test.get('actionOneText') : null;
const _getActionTwoText = state => Map.isMap(state.test) ? state.test.get('actionTwoText') : null;
const _getFetchTextRequest = state => Map.isMap(state.test) ? state.test.get('fetchTextRequest') : null;
const _getFetchTextSuccess = state => Map.isMap(state.test) ? state.test.get('fetchTextSuccess') : null;
const _getFetchDate = state => Map.isMap(state.test) ? state.test.get('fetchDate') : null;

export const getAllSelector = createSelector(
    [
        _getActionOneText,
        _getActionTwoText,
        _getFetchTextRequest,
        _getFetchTextSuccess,
        _getFetchDate
    ],
    (actionOneText,
     actionTwoText,
     fetchTextRequest,
     fetchTextSuccess,
     fetchDate) => {
        return {
            actionOneText,
            actionTwoText,
            fetchTextRequest,
            fetchTextSuccess,
            fetchDate
        }
    }
);

export function mapStateToProps(state) {
    return {
        actionOneText: getAllSelector(state).actionOneText,
        actionTwoText: getAllSelector(state).actionTwoText,
        fetchTextRequest: getAllSelector(state).fetchTextRequest,
        fetchTextSuccess: getAllSelector(state).fetchTextSuccess,
        fetchDate: getAllSelector(state).fetchDate
    };
}

export function mapDispatchToProps(dispatch, ownProps) {
    return {
        getActionOneText(){
            dispatch(getActionOneText())
        },
        getActionTwoText(){
            dispatch(getActionTwoText())
        },
        fetchText(){
            dispatch(fetchText())
        }
    }
}