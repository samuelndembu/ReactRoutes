
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

//Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles'
 //create app component
const App = () => {
    return (
        <BrowserRouter>
            <header>
                Header
            </header>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/profile" component={Profile}/>
        </BrowserRouter> 

    )
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)