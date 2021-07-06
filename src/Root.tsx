import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ContinentsList from './pages/ContinentsList/ContinentsList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import client from './GraphQL/Client';
import Home from './pages/Home/Home';
import ContinentItem from './pages/ContinentItem/ContinentItem';

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/continents" exact>
                        <ContinentsList />
                    </Route>
                    <Route path="/continents/:id">
                        <ContinentItem />
                    </Route>
                </Switch>
            </Router>
        </ApolloProvider>
    );
};

export default Root;
