import React, {Component} from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
      <section>
      < Dashboard />
        {/* <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/posts' component={PostContainer} />
        </Switch> */}
      </section>
      </BrowserRouter>
    )
  }
}

export default App;
