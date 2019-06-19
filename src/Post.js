import React, { Component, Fragment } from 'react';
import './post.css'


class Post extends Component {
    render() {
        return (
                <div className="col-md-3">
                    <div className="card post-card">
                    <img className="post-img-top img-responsive" src={this.props.post.featureImg} alt="Cinque Terre" />
                    <div className="card-body">
                        <h5 className="post-title">{this.props.post.title}</h5>
                        <p className="post-body">{this.props.post.body}</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                    </div>
                </div>
            
        
        )
    }
}

export default Post;