import React from 'react';
import ReactDOM from 'react-dom'

// Components
import Header from './components/header';
import Product from './product'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Welcome to React1</h1>


        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
