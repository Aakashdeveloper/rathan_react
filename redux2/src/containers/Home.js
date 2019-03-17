import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import {latestNews, articlesNews, latestGallery} from '../actions';

import LatestNews from '../components/home/Latest';
import ArticleNews from '../components/home/Article';
import Gallery from '../components/home/Gallery';

class Home extends Component{
    componentDidMount(){
        this.props.latestNews();
        this.props.articlesNews();
        this.props.latestGallery();
    }
    render(){
        return(
            <div>
                <LatestNews latestdata={this.props.articles.latest}/>
                <ArticleNews articledata={this.props.articles.artilce}/>
                <Gallery gallerydata={this.props.gallery.galleryNews}/>
            </div>
        )
    }
}
// recive the data
function mapStateToProps(state){
    // console.log(state)
    return{
        articles:state.articles,
        gallery:state.gallery
    }
}

// Actions to be called
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews, articlesNews, latestGallery},dispatch)

}

export default connect(mapStateToProps,mapDispatchToProps)(Home);