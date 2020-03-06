import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        
        <GlobalStyle />
    </Router>
  );
}

export default App;
