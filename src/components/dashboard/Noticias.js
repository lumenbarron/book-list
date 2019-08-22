import React, { Component} from 'react';
import { connect } from 'react-redux';

class Noticias extends Component {
    render () {
        const {posts} = this.props;
        const postsList = posts.length ? ( posts.map(post => { 
            return (
              <section className="post card" key={post.id}>
                <section className="card-content" key={post.id}>
                  <h6 className="card-title" key={post.id}>
                    {post.title}
                  </h6>
                  <span>{post.content}</span>
                </section>
              </section>
            );

        } )

        ) : (
            <p className = "center">No post yet</p>
       )
        return (
            <section>
                <h4>Noticias</h4>
                <span>{postsList}</span>
            </section>
        )
    }
   
}

const mapStateToProps = (state) => {
    return {
        posts : state.project.notifications
    }
}


export default connect(mapStateToProps)(Noticias)