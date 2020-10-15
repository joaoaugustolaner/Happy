import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Landing from './screens/landing'
import OrphanageMap from './screens/orphanages'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact/>
                <Route path="/map" component={OrphanageMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes