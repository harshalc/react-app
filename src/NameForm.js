import React, { Component, Fragment } from 'react';

class NameForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
    }
    onSubmit(event){
      event.preventDefault();
    };
    nameChanged(event){
        this.setState({ value: event.target.value});
    };
    render(){

        return(
            <Fragment>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <label>Name:</label>
                <input  onChange={this.nameChanged}  value={this.state.value} type="text" className="form-control" placeholder="Enter Name" name="name" id="name"/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            </Fragment>
        );
    }
}

export default NameForm;