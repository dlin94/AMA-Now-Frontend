import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Welcome from './components/welcome';
import Submit from './components/submit';
import Confirm from './components/confirm';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Welcome} />
    <Route path="submit" component={Submit} />
    <Route path="confirmation" component={Confirm} />
  </Route>
);
