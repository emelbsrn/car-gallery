import React from 'react';
import Header from './Header';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import Gallery from './Gallery';
import CarCreate from './CarCreate';

const App = () => {
  return (
    <div className = "ui container" >
      <Router history={history}>
        <>
          <Header />
          <Switch>
            <Route exact path="/" />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/createCar" component={CarCreate} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
