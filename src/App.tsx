import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import MainScreen from './pages/MainScreen';
import PageB from './pages/PageB';
import Login from './pages/Login';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/main" component={MainScreen} />
        <Route path="/pageb" component={PageB} />
      </Switch>
    </Router>
  );
};

export default App;
