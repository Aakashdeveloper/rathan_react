import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
    console.log('in artist list', props)

    const renderlist = ({artistData}) => {
        if(artistData){
            return artistData.map((data) => {
                const styles = {
                    background:`url('/images/covers/${data.cover}.jpg')
                    no-repeat`
                }
                return(
                    <Link key={data.id} to={`/artist/${data.id}`}
                        className="artist_item"
                        style={styles}>
                        <div>{data.name}</div>
                    </Link>
                )
            })
        }   
    }

    return(
        <div className="artist_list">
            <center>
                <h3>Browse the artists</h3>
            </center>
            {renderlist(props)}
        </div>
    )
}

export default ArtistList;