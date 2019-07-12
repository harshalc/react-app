import React, { Component, Fragment, lazy, Suspense } from 'react';
import LinkComponent from './LinkComponent';
import TagsContainer from './TagsContainer';
import FacebookLoginButton from './FacebookLoginButton';
// import NameForm from './NameForm'
const NameForm = lazy(() => import('./NameForm'));


class SidebarComponent extends Component {
    state = {
        username: null
    };

    onFacebookLogin = (loginStatus, resultObject) => {
        if (loginStatus === true) {
            this.setState({
                username: resultObject.user.name
            });
        } else {
            alert('Facebook login error');
        }
    }
    render() {
        const { username } = this.state;
        let linkContainer = [];
        if(this.props.navList){
            this.props.navList.forEach((value, index) => {
                linkContainer.push(<LinkComponent apiUrl={value.url} urlName={value.name}  key={index} color={value.color}></LinkComponent>)
            });
        }
        return (
            <Fragment>
            <ul>
              {linkContainer}
            </ul>
                <div className="App-intro">
                    { !username &&
                    <div>
                        <p>Click on one of any button below to login</p>
                        <FacebookLoginButton onLogin={this.onFacebookLogin}>
                            <button>Facebook</button>
                        </FacebookLoginButton>
                    </div>
                    }
                    {username &&
                    <p>Welcome back, {username}</p>
                    }
                </div>
            <div>
                {/* <TagsContainer posts={this.props.posts}></TagsContainer> */}
                <Suspense fallback={<div>Loading .....</div>}>
                    <NameForm></NameForm>
                </Suspense>
               
            </div>
            </Fragment>
        )
    }
}

export default SidebarComponent;