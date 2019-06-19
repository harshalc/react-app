import React from 'react';
import getData from './api';
import './App.css';
import SidebarComponent from './SidebarComponent';
import MainComponent from './MainComponent';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            postData: []
        };
    }
    componentDidMount() {
        let postData = getData('https://jsonplaceholder.typicode.com/posts');
        postData.then((posts) => {
            this.setState({
                loading: false,
                postData: posts
              });
        })
    }
    render() {
        let navList = [
            {
                name : 'Harshal',
                url: 'https://github.com/harshalc',
                color:'#ff00FF'
            },
            {
                name : 'Pravin',
                url: 'https://github.com/pravin',
                color:'#ffFF00'
            },
            {
                name : 'Mahadev',
                url: 'https://github.com/mahadev',
                color:'#ff0099'
            },
        ]
        return ( 
            <div className = "App container-fluid" >
                <div className="row">
                    <div className="col-md-2">
                        {this.state.loading && <SidebarComponent navList={navList}> </SidebarComponent> }
                        {!this.state.loading && <SidebarComponent navList={navList} posts={this.state.postData}> </SidebarComponent> }
                    </div>
                    <div className="col-md-10">
                        {this.state.loading && <p> Loading..... </p>}
                        {!this.state.loading &&  <MainComponent posts={this.state.postData}> </MainComponent>}
                    </div>
                </div>
             </div>
        );
    }
}
export default App;