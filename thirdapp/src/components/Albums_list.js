import React from 'react';

const showAlbums = ({list}) => {
    if(list){
        return list.map((data, index) => {
            return(
                <img key={index} src={`/images/albums/${data.cover}.jpg`} />
            )
        })
    }
    
}

const AlbumList = (props) => {
    return(
        <div className="album_list">
            {showAlbums(props)}
        </div>
    )
}

export default AlbumList;