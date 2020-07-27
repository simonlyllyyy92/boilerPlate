import React from 'react';

import Homepage from './pages/homepage.component'
import User from './pages/user.component'
import ItemDetail from './pages/ItemDetail.component'
import notFoundPage from './pages/404page.component'

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = {Homepage} />
        <Route path = '/user' component = {User} />
        <Route path = '/shop/:topicId' component = {ItemDetail} />
        <Route component = {notFoundPage}/>
      </Switch>
    </div>
  );
}

export default App;
