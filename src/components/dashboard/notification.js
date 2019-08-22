import React, { Component} from 'react';
import axios from 'axios';

class Notification extends Component {
    state = {
        posts : []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            //console.log(res)
            this.setState({
                posts: res.data.slice(0,3)
            })
        })
    }
    render () {
        const {posts} = this.state;
        const postsList = posts.length ? ( posts.map(post => { 
            return (
              <section className="post card" key={post.id}>
                <section className="card-content" key={post.id}>
                  <h6 className="card-title" key={post.id}>
                    {post.title}
                  </h6>
                  <span>{post.body}</span>
                </section>
              </section>
            );

        } )

        ) : (
            <p className = "center">No post yet</p>
       )
        return (
            <section>
                <h4>Notification</h4>
                <span>{postsList}</span>
            </section>
        )
    }
   
}


export default (Notification)