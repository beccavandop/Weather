import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import Homepage from './Homepage';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      { /* <IndexRoute component={Homepage}/>
      <Route path='/search' component={Input}/> */ }
    </Route>
  </Router>), document.getElementById('root'));
registerServiceWorker();
