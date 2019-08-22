import  React, { Component } from "react";
import { connect } from "react-redux";
import CreatePostButton from './CreatePostButton'

class CreatePost extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     showForm : true,
  //   }
  // }
  // changeView (){
  //   this.setState({
  //     ...this.state,
  //     showForm : false,
  //     showCreate : true
  //   })
  // }
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
    return (
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

          <button
            variant="contained"
            size="large"
            color="secondary"
            onClick={this.changeView}
          >
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(CreatePost);
