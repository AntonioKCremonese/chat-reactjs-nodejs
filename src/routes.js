import React from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';



const Routes = () => {
    const auth = useSelector(state => state.auth);
    console.log(auth)
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                {/* <PrivateRoute path="/chat" component={Chat} test={auth} /> */}
                
                {auth ? (<Route  path="/chat" component={Chat} />) : null} 
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

// const PrivateRoute = ({ component: Component, ...rest }) => {
//    const auth = useSelector(state => state.auth);
//     console.log(rest);
//     return (
//         <Route {...rest} render={props => (
//             rest.auth ? (
//                 <Component {...props} />
//             ) : (
//                     <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//                 )
//         )} />)
// }


export default Routes;