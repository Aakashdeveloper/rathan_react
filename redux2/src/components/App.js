import React,{Component} from 'react';
import { BrowserRouter,Route} from 'react-router-dom';

// container
import Home from '../containers/Home';
import News from '../containers/News';
import Gallery from '../containers/Gallery';

// component
import Header from './Header';
import Footer from './Footer';

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/news/:id" component={News}/>
                    <Route exact path="/galleries/:id" component={Gallery}/>
                    <Route exact path="/" component={Home}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
