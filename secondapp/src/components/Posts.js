import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Posts extends Component{
    render(){
        return(
            <div class="panel panel-danger">
                <div class="panel-heading">Posts Heading</div>
                <div class="panel-body">
                    <Link to="/posts/1">Posts1 Content</Link>
                    <br/>
                    <Link to="/posts/2">Posts2 Content</Link>
                </div>
            </div>
        )
    }
}

export default Posts;