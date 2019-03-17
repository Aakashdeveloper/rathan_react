import React from 'react';
import { Link} from 'react-router-dom'

const showLatestNews = ({latestdata}) =>  {
    if(latestdata){
        return latestdata.map((data,index) => {
            return(
                <Link to={`/news/${data.id}`} className="item" key={index}>
                    <div className="image_cover"
                        style={{background:`url(/images/articles/${data.img}`}}>
                        <div className="description">
                            <span>{data.category}</span>
                            <div>{data.title}</div>
                        </div>
                    </div>
                    
                </Link>
            )
        })
    }

}

const LatestNews = (props) =>{
    console.log(props)
    return(
        <div className="home-latest">
            {showLatestNews(props)}
        </div>
    )
}

export default LatestNews;