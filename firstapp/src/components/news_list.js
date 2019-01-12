import React from 'react';

const NewsList = (props) => {
    // console.log("news list", props)

    const output = props.newsData.map((item) => {
        return(
            <div key={item.id}>
                <h1>{item.title}</h1>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    })

    return(
        <div>
            {output}
        </div>
    )
}

export default NewsList;