import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from "react-redux";
import store from "./redux/store";
import App from './component/App/App';
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <Switch>
            <Route exact path={"/"}>
                <CreateUsername />
            </Route>
            <Route path={"/:username"}>
                <App />
            </Route>
        </Switch>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
