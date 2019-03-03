import {ArticleURL} from '../constants/apiurl'

export function latestNews(){
    const request = fetch(`${ArticleURL}?_end=3`,{method:'GET'})
        .then((res) => res.json());

    return{
        type:'GET_LATEST',
        payload:request
    }
}