import {
    Switch,
    Route
} from "react-router-dom";

import App from './component/App/App';
import CreateUser from './component/CreateUser/CreateUser'
import React from 'react';

function Routing () {
    return(
        <div>
            <Switch>
                <Route exact path={"/"} component={CreateUser}/>
                <Route path={"/:username"} component={App}/>
            </Switch>
        </div>
    )
}

export default Routing;