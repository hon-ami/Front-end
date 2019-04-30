import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path='/' component={LandingPage}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
