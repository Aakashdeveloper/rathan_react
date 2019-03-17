import {ArticleURL,GalleryURL} from '../constants/apiurl'

export function latestNews(){
    const request = fetch(`${ArticleURL}?_end=3`,{method:'GET'})
        .then((res) => res.json());

    return{
        type:'GET_LATEST',
        payload:request
    }
}

export function articlesNews(){
    const request = fetch(`${ArticleURL}?_start=3&_end=10`,{method:'GET'})
        .then((res) => res.json());

    return{
        type:'GET_ARTICLES',
        payload:request
    }
}

export function latestGallery(){
    const request = fetch(`${GalleryURL}?_limit=2`,{method:'GET'})
        .then((res) => res.json());

    return{
        type:'GET_GALLERY',
        payload:request
    }
}

////////////////
export function selectedNews(id){
    const output = fetch(`${ArticleURL}?id=${id}`, {method:'GET'})
        .then(response => response.json())

        return {
            type:'GET_SELECTED_NEWS',
            payload: output
        }
}

export function clearSelectedNews(){
    return{
        type:'CLEAR_SELECTED_NEWS',
        payload:[]
    }
}