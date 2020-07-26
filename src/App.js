import React from 'react';

import Homepage from './pages/homepage.component'
import shop from './pages/shop.component'
import ItemDetail from './pages/ItemDetail.component'
import notFoundPage from './pages/404page.component'

import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = {Homepage} />
        <Route exact path = '/shop' component = {shop} />
        <Route path = '/shop/:topicId' component = {ItemDetail} />
        <Route component = {notFoundPage}/>
      </Switch>
    </div>
  );
}

export default App;
