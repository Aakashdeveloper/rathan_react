import React, {Component} from 'react';

import Banner from './banner';
import ArtistList from './ArtistList';

const URL_ARTIST = 'http://localhost:8900/artists';

class Home extends Component{

    constructor(props){
        super(props);

        this.state={
            artist: ''
        }

         console.log("constructor");
    }

    componentDidMount(){
         console.log("hook");
        fetch(URL_ARTIST, {
            method: 'GET'
        })
         .then((res) => res.json())
        .then((data) =>{
            this.setState({
                artist:data
            })
        })
    }

    componentWillMount(){
       // console.log("will hook");
    }
    render(){
        console.log("render");
        return(
            <div>
                <Banner></Banner>
                <ArtistList artistData={this.state.artist}></ArtistList>
            </div>
        )
    }
}

export default Home;


/*
this.setState({
                artist:data
            })
            */