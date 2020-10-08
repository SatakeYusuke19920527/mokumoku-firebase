import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, fetchGetData } from './features/fetchSlice';
// components
import PageA from './pages/PageA';
import PageB from './pages/PageB';

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PageA} />
        <Route path="/pageb" component={PageB} />
      </Switch>
    </Router>
  );
};

export default App;
