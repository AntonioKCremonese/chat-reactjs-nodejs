import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const  {auth}  = useSelector(state => state.data);
    
     return (
         <Route {...rest} render={props => (
             auth ? (
                 <Component {...props} />
             ) : (
                     <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                 )
         )} />)
 }

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/chat" component={Chat} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}




export default Routes;