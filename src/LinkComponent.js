import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LinkComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            visited: false
        };

        this.gotClicked = this.gotClicked.bind(this);
        this.gotPointMoved = this.gotPointMoved.bind(this);
        this.onPointerLeave = this.onPointerLeave.bind(this);
    }

    gotClicked(event){
        event.preventDefault();
        console.log('I am event');
        console.log(event);
        console.log(event.target);
    }

    gotPointMoved(event){
        this.setState({
            visited: true
          });
    }

    onPointerLeave(event){
        this.setState({
            visited: false
          });
    }
    render() {
        const linkStyle = {
            color: this.state.visited? 'blue' : this.props.color,
        }
        return (
            <li>
            <a href={this.props.apiUrl} style={linkStyle} onClick={this.gotClicked} 
            onPointerMove={this.gotPointMoved}
            onPointerLeave={this.onPointerLeave}>{this.props.urlName}</a>
            </li>
        )
    }
}
LinkComponent.propTypes = {
    apiUrl : PropTypes.string,
    urlName : PropTypes.string,
    color : PropTypes.string,
}

export default LinkComponent;