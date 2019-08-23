import React, {Component} from "react";
import {Grid} from '@material-ui/core';
import CreatePost from '../posts/CreatePost';
import AllPost from '../posts/AllPost';
import AddPostButton from '../posts/AddPostButton';

class PostContainer extends Component {
  constructor () {
    super()
    this.state = {
      showCreate : true
    }
  }
  changeView = () => {
    this.setState({
      ...this.state,
      showCreate : false,
      showList : true
    })
  }
render () {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid  spacing={3} item xs={6} sm={6} md={6}>
          <AllPost />
        </Grid>
        <Grid  spacing={3} item xs={6} sm={6} md={6}>
          <CreatePost />
        </Grid>
        <AddPostButton />
      </Grid>
    </div>
  );
}
};

export default PostContainer;