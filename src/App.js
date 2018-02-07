import React, { Component } from 'react';
import Calculator from '../src/components/Calculator';
import Portfolio from '../src/components/Portfolio';
import Weather from '../src/components/Weather';
import ToDo from '../src/components/ToDo';
import { Route, Switch } from 'react-router-dom';
import ReactMinis from './components/ReactMinis';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Portfolio } /> 
          <Route path='/react-mini/calculator' component={ Calculator } /> 
          <Route path='/react-mini/to-do' component={ ToDo } /> 
          <Route path='/react-mini/weather-app' component={ Weather } /> 
          <Route path='/react-minis' component={ ReactMinis } /> 
        </Switch>
      </div>
     );
  }
}

export default App;
