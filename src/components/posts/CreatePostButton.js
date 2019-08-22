import React from 'react'
import {Button} from '@material-ui/core';

const CreatePostButton = (props) => {
    return <button variant="contained"
    size="large"
    color="secondary" onClick = {props.createPost}>Create</button>
}

export default CreatePostButton