import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
//navbar
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
