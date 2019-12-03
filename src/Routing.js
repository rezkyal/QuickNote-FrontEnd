import {
    Switch,
    Route
} from "react-router-dom";

import App from './component/App/App';
import Loading from './component/Loading/Loading'
import React from 'react';


function Routing () {
    return(
        <div>
            <Switch>
                <Route exact path={"/"}>
                    <Loading message="Creating note"/>
                </Route>
                <Route path={"/:username"} component={App}>
                </Route>
            </Switch>
        </div>
    )
}

export default Routing;