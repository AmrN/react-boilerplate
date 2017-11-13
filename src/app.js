import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configure-store';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import { login, logout } from './actions/auth';
// import { AppContainer } from 'react-hot-loader';
// import 'react-hot-loader/patch';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

let appRendered = false;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    // renderApp();
  } else {
    store.dispatch(logout());
    // renderApp();
  }
  if (!appRendered) {
    renderApp(AppRouter);
  }
  appRendered = true;
});

const renderApp = (Root) => {
  const jsx = (
    <Provider store={store}>
      <Root />
    </Provider>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// renderApp(AppRouter);

if (module.hot) {
  module.hot.accept('./routers/AppRouter', () => {
    // const Root = require('./routers/AppRouter').default;
    renderApp(AppRouter);
  });
}
