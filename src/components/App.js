import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Hangman from '../pages/hangman';

class App extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Hangman} />
                </Switch>
            </Router>
        )
    }
}

export default App;