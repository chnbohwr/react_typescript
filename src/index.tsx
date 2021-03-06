import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Home } from './container/Home/Home';

import './index.less';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
  </Router>,
  document.getElementById('root')
);
