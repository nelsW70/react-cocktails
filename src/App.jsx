import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
