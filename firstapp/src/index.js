import React, {Component} from 'react';
import ReactDOM from 'react-dom'

// Components
import Header from './components/header';
import NewsList from './components/news_list';

// Data
import JSON from './db.json';

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            news: JSON,
            filteredNews: JSON
        }
    }

    filterNews(keywords){
        let outputNews = this.state.news.filter((item) => {
            return item.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1
        })

        this.setState({
            filteredNews: outputNews
        })
    }

    render(){
        return(
            <div>
                <Header newsSearch={(data) => {this.filterNews(data)}}/>
                <NewsList newsData={this.state.filteredNews}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
