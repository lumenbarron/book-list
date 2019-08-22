import React, {Component} from "react";
import {Button, Grid} from '@material-ui/core';
import PostContainer from './PostContainer'
import Navbar from './Navbar';
import AddPostButton from '../posts/AddPostButton';
// import {Grid, makeStyles} from '@material-ui/core';

// const createpost = {
//   border: '1px solid pink',
// };

// const allpost = {
//   border: '1px solid blue',
// };

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
            // showPost : !this.state.showPost
        })
      }
      render () {
        return (
          <div>
            <Navbar/>
            {this.state.showPost && <AddPostButton addPost = {this.changeView} />}
            {this.state.showCont && <PostContainer />}
            {/* <Grid container spacing={3}> */}
              {/* {this.state.showPost ? (
                  <h5>Aún no has añadido ningún libro</h5>

              ) : (
                // <Grid
                //   style={allpost}
                //   spacing={3}
                //   item
                //   xs={6}
                //   sm={6}
                //   md={6}
                // >
                  <PostContainer />
               // </Grid>
              )} */}
            {/* </Grid> */}
            {/* <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={() => this.changeView()}
              >
                Agrega un libro por leer
              </Button> */}
              
          </div>
        );
      }
};

export default Dashboard;
