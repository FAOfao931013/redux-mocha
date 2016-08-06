import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import Immutable from 'immutable';
import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

const {Map} = Immutable;

const {
    getActionOneText,
    getActionTwoText,
    fetchText
    } = actions;

const {
    TEST_ACTIONONE,
    TEST_ACTIONTWO,
    TEST_FETCHTEXTREQUEST,
    TEST_FETCHTEXTSUCCESS
    } = actionTypes;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    it('should create an action to getActionOneText', () => {
        const expectedAction = {
            type: TEST_ACTIONONE,
            text: 'ActionOne'
        };
        expect(actions.getActionOneText()).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action to getActionTwoText', () => {
        const expectedAction = {
            type: TEST_ACTIONTWO,
            text: 'ActionTwo'
        };
        expect(actions.getActionTwoText()).toEqual(expectedAction)
    })
});

describe('async action', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('fetchText', () => {
        nock('http://localhost:8030')
            .get('/example.js')
            .reply(200, {date: '20160802'});

        const expectedActions = [
            {
                type: TEST_FETCHTEXTREQUEST,
                text: 'fetch request'
            },
            {
                type: TEST_FETCHTEXTSUCCESS,
                date: '20160802',
                text: 'fetch success'
            }
        ];

        const store = mockStore({test: Map({})});

        return store.dispatch(fetchText())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });

    })
});