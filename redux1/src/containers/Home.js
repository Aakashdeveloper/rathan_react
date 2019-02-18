import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Layout from '../components/layout';

class Home extends Component{

    componentWillMount(){
        this.props.moviesList();
    }

    render(){
        return(
            <div>
                <Layout list={this.props.movies}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        movies:state.movies
    }
}
export default connect(mapStateToProps,actions)(Home);