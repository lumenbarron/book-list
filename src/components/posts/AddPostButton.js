import React from 'react'
import {Button} from '@material-ui/core';

const AddPostButton = (props) => {
    return <Button variant="contained"
    size="large"
    color="secondary" onClick = {props.addPost}>Agregar un nuevo Post</Button>
}

export default AddPostButton