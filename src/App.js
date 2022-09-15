import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Logout } from './components/Logout';
import { Login } from './components/Login';

//rewrite using function
export default function App(props) {
    return (
        <Layout>
            {
                <React.Fragment>
                    {/* <Route exact path='/' render={() =>
                                        <Home />} /> */}
                    <Route path='/' component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' component={Logout} />
                </React.Fragment>
            }
        </Layout>
    );
}
