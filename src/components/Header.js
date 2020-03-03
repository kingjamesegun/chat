import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Journal from './Journal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const Header=()=>{
    return(
        <Router>
            <div>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/journal"  exact component={Journal}/>
                    
                </Switch>
            </div>
        </Router>
        
    )
};

export default Header;