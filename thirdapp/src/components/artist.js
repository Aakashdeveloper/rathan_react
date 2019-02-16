import React, {Component} from 'react';
import Header from './header';

import AlbumsList from './Albums_list';

const URL_ARTIST = 'http://localhost:8900/artists';

class Artist extends Component {
    constructor(props){
        super(props);

        this.state = {
            artist:''
        }
    }

    componentDidMount(){
        fetch(`${URL_ARTIST}/${this.props.match.params.artistid}`,{
            method:'GET'
        })
            .then((response) => response.json())
            .then((data)=> {
                this.setState({
                    artist:data
                })
            });
    }
    render(){
        return(
            <div>
                <Header></Header>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg')`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <AlbumsList list={this.state.artist.albums}/>
                </div>
            </div>
        )
    }
}

export default Artist;