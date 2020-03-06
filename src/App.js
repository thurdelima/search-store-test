import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';
import StoreDetails from './components/store-details';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={StoreDetails} />
        <GlobalStyle />
    </Router>
  );
}

export default App;
