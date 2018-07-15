import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import {Route, Switch} from 'react-router'
import { PersistGate } from 'redux-persist/integration/react'

import 'bootstrap/dist/css/bootstrap.css';
import './styles/css/App.css';
import App from './components/App';
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import configureStore from './store';
import { PersistorContext } from './contexts/Persistor';

const history = createHistory();
const { store, persistor } = configureStore(history);

const render = (Component) => {
  ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppContainer>
            <PersistorContext.Provider value={persistor}>
              <Switch>
                <Route exact path="/login/" component={Login} />
                <PrivateRoute path="/" component={Component}/>
              </Switch>
            </PersistorContext.Provider>
          </AppContainer>
        </ConnectedRouter>
      </Provider>,
    document.getElementById('root'),
  );
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').catch(() => {});
    });
  }
};

render(App);

if (module.hot) {
  module.hot.accept();
}