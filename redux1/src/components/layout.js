import React from 'react';


const displayList = ({list}) => {
    return list.map((movie) => {
        return(
            <div>{movie.name}</div>
        )
    })
}

const Layout = (props) =>{
    return(
        <div>
        {displayList(props)}
        </div>
    )
}

export default Layout;