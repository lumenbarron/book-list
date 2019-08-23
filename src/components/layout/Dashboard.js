import React, {Component} from "react";
import {Button, Grid} from '@material-ui/core';
import PostContainer from './PostContainer'
import Navbar from './Navbar';
import AddPostButton from '../posts/AddPostButton';

class Dashboard extends Component {
    constructor () {
        super()
        this.state = {
          showPost : true
        }
      }
      changeView = () => {
        this.setState({
          ...this.state,
          showPost : false,
          showCont : true
        })
      }
      render () {
        return (
          <div>
            <Navbar/>
            {this.state.showPost && <AddPostButton addPost = {this.changeView} />}
            {this.state.showCont && <PostContainer />}
          </div>
        );
      }
};

export default Dashboard;
