import * as actionTypes from './actionTypes';
import fetch from 'isomorphic-fetch';

const {
    TEST_ACTIONONE,
    TEST_ACTIONTWO,
    TEST_FETCHTEXTREQUEST,
    TEST_FETCHTEXTSUCCESS
    } = actionTypes;

export function getActionOneText() {
    return {
        type: TEST_ACTIONONE,
        text: 'ActionOne'
    }
}

export function getActionTwoText() {
    return {
        type: TEST_ACTIONTWO,
        text: 'ActionTwo'
    }
}

function fetchTextRequest() {
    return {
        type: TEST_FETCHTEXTREQUEST,
        text: 'fetch request'
    }
}

function fetchTextSuccess(date) {
    return {
        type: TEST_FETCHTEXTSUCCESS,
        date: date,
        text: 'fetch success'
    }
}

export function fetchText() {
    return dispatch => {
        dispatch(fetchTextRequest());
        return fetch('http://localhost:8030/example.js')
            .then(res => res.json())
            .then(res => {
                const date = res.date;
                dispatch(fetchTextSuccess(date))
            })
    }
}