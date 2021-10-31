import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Test from './components/Test';

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/test" />
      </Route>
      <Route exact path="/test" component={Test} />
    </Switch>
  );
}

export default App;
