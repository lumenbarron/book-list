import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  deletePost = () => {};
  render() {
    return (
      <div>
        <h5>{this.props.post.title}</h5>
        <p>{this.props.post.message}</p>
        <button
          onClick={() =>
            this.props.dispatch({ type: "edit_post", id: this.props.post.id })
          }
        >
          Edit
        </button>
        <button
          onClick={() =>
            this.props.dispatch({ type: "delete_post", id: this.props.post.id })
          }
        >
          Deelete
        </button>
      </div>
    );
  }
}

export default connect()(Post);
