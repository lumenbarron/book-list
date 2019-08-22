import React, {Component} from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home';
import PostContainer from './components/layout/PostContainer'
import Dashboard from './components/layout/Dashboard'
// import CreatePost from './components/CreatePost'
// import AllPost from './components/AllPost'

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
