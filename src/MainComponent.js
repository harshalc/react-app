import React, { Component, Fragment } from 'react';
import './post.css'
import PostListComponent from './PostListComponent';


class MainComponent extends Component {
   
    render() {
        return (
            <Fragment>
                 <PostListComponent posts={this.props.posts}/>
            </Fragment>
        )
    }
}
export default MainComponent;