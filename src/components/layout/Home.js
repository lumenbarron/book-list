import React, {Component} from "react";
import Navbar from './Navbar'
import {Grid, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const createpost = {
  border: '1px solid pink',
};

const allpost = {
  border: '1px solid blue',
};

class Home extends Component {
render () {
  return (
      <div>
          <Navbar/>
          <Grid container spacing={3}>
      <Grid style={createpost} spacing={3} item xs={6} sm={6} md={6} />
      <Grid style={allpost} spacing={3} item xs={6} sm={6} md={6} />
    </Grid>
    <Link to='/posts' variant="contained"
                size="large"
                color="secondary" >Agrega un libro por leer </Link> 
    {/* <Button
                variant="contained"
                size="large"
                color="secondary"
              >
                
              </Button> */}
      </div>

  );
}
};

export default Home;