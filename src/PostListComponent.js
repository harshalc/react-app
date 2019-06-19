import React, { Component } from 'react';
import './post.css'
import Post from './Post';

class PostListComponent extends Component {
    render() {
        let postContainer = [];
         if(this.props.posts){
             this.props.posts.forEach((value, index) => {
                 postContainer.push(<Post post={value} key={index}></Post>)
             });
         }
     return (
            <div className="row">
                 {postContainer}
            </div>
 
         )
     } 
 }
 export default PostListComponent;