import * as React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CounterContainer from '../containers/CounterContainer';
import HomeContainer from '../containers/HomeContainer';
import TodosContainer from '../containers/TodosContainer';
import './App.scss';

const App: React.SFC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/counter" component= {CounterContainer} />
      <Route path="/todos" component= {TodosContainer} />
    </Switch>
  </BrowserRouter>
);

export default App;
