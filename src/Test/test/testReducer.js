import expect from 'expect';
import * as actionTypes from '../actionTypes';
import Immutable from 'immutable';
import reducer from '../reducer';

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

describe('test reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            initialState
        )
    });


    it('should handle TEST_ACTIONONE', () => {
        expect(
            reducer(
                initialState,
                {
                    type: TEST_ACTIONONE,
                    text: 'ActionOne'
                }
            )
        ).toEqual(
            Map({
                actionOneText: 'ActionOne',
                actionTwoText: '',
                fetchTextRequest: '',
                fetchTextSuccess: '',
                fetchDate: ''
            })
        )
    });

    it('should handle TEST_ACTIONTWO', () => {
        expect(
            reducer(
                initialState,
                {
                    type: TEST_ACTIONTWO,
                    text: 'ActionTwo'
                }
            )
        ).toEqual(
            Map({
                actionOneText: '',
                actionTwoText: 'ActionTwo',
                fetchTextRequest: '',
                fetchTextSuccess: '',
                fetchDate: ''
            })
        )
    });

    it('should handle TEST_FETCHTEXTREQUEST', () => {
        expect(
            reducer(
                initialState,
                {
                    type: TEST_FETCHTEXTREQUEST,
                    text: 'fetch request'
                }
            )
        ).toEqual(
            Map({
                actionOneText: '',
                actionTwoText: '',
                fetchTextRequest: 'fetch request',
                fetchTextSuccess: '',
                fetchDate: ''
            })
        )
    });

    it('should handle TEST_FETCHTEXTSUCCESS', () => {
        expect(
            reducer(
                initialState,
                {
                    type: TEST_FETCHTEXTSUCCESS,
                    date: '20160802',
                    text: 'fetch success'
                }
            )
        ).toEqual(
            Map({
                actionOneText: '',
                actionTwoText: '',
                fetchTextRequest: '',
                fetchTextSuccess: 'fetch success',
                fetchDate: '20160802'
            })
        )
    });
});

