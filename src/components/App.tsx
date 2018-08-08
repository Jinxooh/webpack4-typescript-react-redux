import * as React from "react";
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CounterContainer from '../containers/CounterContainer';
import HomeContainer from '../containers/HomeContainer';
import TodosContainer from '../containers/TodosContainer';
import locale from '../translations';
import './App.scss';

const defaultLang = localStorage.getItem('lang') || 'ko';

const App: React.SFC<{}> = () => (
  <IntlProvider
    locale={defaultLang}
    messages={locale[defaultLang]}
  >
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/counter" component= {CounterContainer} />
        <Route path="/todos" component= {TodosContainer} />
      </Switch>
    </BrowserRouter>
  </IntlProvider>
);

export default App;
