import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../HomeComponent/Home';
import Footer from '../FooterComponent/Footer';
import Navbar from '../NavbarComponent/Navbar';

function Main() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/checkout">
                        <Navbar />
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Navbar />
                        <Footer />
                    </Route>
                    <Route path="/">
                        <Navbar />
                        <Home />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
