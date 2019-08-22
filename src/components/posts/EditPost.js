import React, { Component } from "react";
import { connect } from "react-redux";

class EditPost extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      id: new Date(),
      newTitle,
      newMessage
    };
    this.props.dispatch({
      type: "update_post",
      id: this.props.post.id,
      data: data
    });
    console.log(data);
  };

  render() {
    return (
      <div>
        <h4>Create Post</h4>
        <form onSubmit={this.handleEdit}>
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

          <button>Post</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditPost);
