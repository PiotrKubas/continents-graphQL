import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Continents from './pages/Continents/Continents';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import client from './GraphQL/Client';

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <div>React template</div>
            <Continents />
        </ApolloProvider>
    );
};

export default Root;
