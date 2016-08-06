import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Test from 'src/Test';

export default combineReducers({
    [Test.constants.NAME]: Test.reducer,
    routing: routerReducer
});