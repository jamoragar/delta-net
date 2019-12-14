import React from 'react';
import {Route, Switch, Redirect, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
//Componentes
import NavigationBar from './navbar';
import Home from './home';
import AboutUs from './aboutus';
import Services from './services';
import Contact from './contact';
import _404 from './404';

export const history = createBrowserHistory();

const NotFoundRedirect = () => <Redirect to='/not-found' />

const Routes = (props) => {
    return(
        <Router history={history}>
            <NavigationBar/>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path='/Nosotros' component={AboutUs} />
                <Route path='/Servicios' component={Services} />
                <Route path='/Contacto' component={Contact} />
                <Route path="/not-found" component={_404} />
                <Route component={NotFoundRedirect} />
            </Switch>
        </Router>
    );
}

export default Routes;