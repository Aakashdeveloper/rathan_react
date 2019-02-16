import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';


//Components
import Profile from './components/Profile';
import Posts from './components/Posts';
import PostDetails from './components/post_detail';
import Lifecycle from './components/Lifecycle';

class App extends Component {
    render(){
        return(
            <div>
                <div class="panel panel-primary">
                    <div class="panel-heading">Home Heading</div>
                    <div class="panel-body">Home Content</div>
                </div>
                
            </div>
            
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span> 
                    </button>
                    <a class="navbar-brand" href="#">React App</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Posts</Link></li> 
                        <li><Link to="/profile">Profile</Link></li> 
                        <li><Link to="/lifecycle">LifeCycle</Link></li> 
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/posts"  component={Posts}></Route>
            <Route path="/profile"  component={Profile}></Route>
            <Route path="/posts/:id"  component={PostDetails}></Route>
            <Route path="/lifecycle"  component={Lifecycle}></Route>
        </div>
    </BrowserRouter>
    , document.getElementById('root'))