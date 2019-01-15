import React, {Component} from 'react';

class PostDetails extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return (
            <div class="panel panel-success">
                <div class="panel-heading">Post Detail Heading</div>
                <div class="panel-body">Post Detail Content for      {this.props.match.params.id}</div>
            </div>
        )
    }
}

export default PostDetails;