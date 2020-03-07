import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import Maps from './components/map';
import StoreDetails from './components/store-details';
import { createBrowserHistory } from "history";
import GlobalStyle from './styles/global';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history} >
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={StoreDetails} />
        <Route exact path="/map" component={Maps} />
        <GlobalStyle />
    </Router>
  );
}

export default App;
