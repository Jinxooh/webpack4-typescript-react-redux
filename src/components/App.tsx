import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CounterContainer from '../containers/CounterContainer';
import HomeContainer from '../containers/HomeContainer';
import './App.scss';

interface Props {
}

const App: React.SFC<Props> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/counter" component= {CounterContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
