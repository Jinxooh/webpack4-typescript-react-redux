import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CounterContainer from '../containers/CounterContainer';
import HomeContainer from '../containers/HomeContainer';
import './App.scss';

const App: React.SFC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/counter" component= {CounterContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
