import  React, { Component } from "react";
//import {createProjectAction } from '../../store/actions/projectAction';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/styles';
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from '@material-ui/core/Button';
import AllPost from './AllPost';
import CreatePostButton from './CreatePostButton'

// const styles = theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   formControl: {
//     margin: theme.spacing(1)
//   }
// });

class CreatePost extends Component {
  constructor () {
    super()
    this.state = {
      showForm : true,
    }
  }
  changeView (){
    this.setState({
      ...this.state,
      showForm : false,
      showCreate : true
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };
    this.props.dispatch({
      type: "create_post",
      data
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
    console.log(data);
  };

  render() {
    //const { classes } = this.props;
    return (
      <div>
        {this.state.showForm &&
          <div>
                  <h4>Create Post</h4>
                  <form onSubmit={this.handleSubmit}>
                    <input
                      required
                      type="text"
                      ref={input => (this.getTitle = input)}
                      placeholder="Enter Post Title"
                    />
          
                    <textarea
                      required
                      ref={input => (this.getMessage = input)}
                      placeholder="Enter Post"
                    />
          
          <CreatePostButton createPost = {this.changeView} />
                  </form>
                  </div>
        }
        {this.state.showCreate && null}


      </div>
    );
  }
}

// class CreatePost extends Component {
//     handleSubmit = e => {
//       e.preventDefault();
//       const title = this.getTitle.value;
//       const message = this.getMessage.value;
//       const data = {
//         id: new Date(),
//         title,
//         message,
//         editing: false
//       };
//       this.props.dispatch({
//         type: "create_post",
//         data
//       });
//       this.getTitle.value = "";
//       this.getMessage.value = "";
//       console.log(data);
//     };
  
//     render() {
//       //const { classes } = this.props;
//       return (
//         <div>
//           <h4>Create Post</h4>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               required
//               type="text"
//               ref={input => (this.getTitle = input)}
//               placeholder="Enter Post Title"
//             />
  
//             <textarea
//               required
//               ref={input => (this.getMessage = input)}
//               placeholder="Enter Post"
//             />
  
//             <button>Post</button>
//           </form>
//         </div>
//       );
//     }
//   }

export default connect()(CreatePost)
