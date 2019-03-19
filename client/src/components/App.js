import React from 'react';
import Header from './Header';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../history';
import CarList from './CarList';
import CarCreate from './CarCreate';
import CarShow from './CarShow';

const App = () => {
  return (
    <div className = "container" >
      <Router history={history}>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={CarList}/>
            <Route exact path="/listCars" component={CarList} />
            <Route exact path="/createCar" component={CarCreate} />
            <Route exact path="/cars/:id" component={CarShow} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
