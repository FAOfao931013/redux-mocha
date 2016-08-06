import React from 'react';
import { Route } from 'react-router';
import rootNode from './rootNode';
import * as Test from 'src/Test';

let routes = (
    <div>
        <Route path="/" component={rootNode}>
            <Route path="test" component={Test.containers}/>
        </Route>
    </div>
);

export default routes;