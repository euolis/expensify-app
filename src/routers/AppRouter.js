import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import EditExspensePage from '../components/EditExspensePage';
import AddExspensePage from '../components/AddExspensePage';
import ExspenseDashboardPage from '../components/ExspenseDashboardPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExspenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExspensePage} />
                <Route path="/edit/:id" component={EditExspensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
