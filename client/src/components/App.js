import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    {/*TODO: work/experience section*/}
                </div>
            </Router>
        );
    }
}

export default App;