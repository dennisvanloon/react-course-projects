import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioPage from '../components/PortfolioPage';
import EditPortfolioPage from '../components/EditPortfolioPage';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/HomePage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/portfolio/:id" component={EditPortfolioPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;