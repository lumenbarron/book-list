import React, {Component} from "react";
import {Grid} from '@material-ui/core';
import CreatePost from '../posts/CreatePost';
import AllPost from '../posts/AllPost';
import AddPostButton from '../posts/AddPostButton';

const createpost = {
  border: '1px solid pink',
};

const allpost = {
  border: '1px solid blue',
};

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
      {/* {this.state.showCreate && <AddPostButton addPost = {this.changeView} /> }
      {this.state.showList && <AllPost /> } */}
      <Grid container spacing={3}>
        <Grid style={createpost} spacing={3} item xs={6} sm={6} md={6}>
          <AllPost />
        </Grid>
        <Grid style={allpost} spacing={3} item xs={6} sm={6} md={6}>
          <CreatePost />
        </Grid>
        <AddPostButton />
      </Grid>
    </div>
  );
}
};

export default PostContainer;