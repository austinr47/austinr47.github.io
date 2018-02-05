import React, { Component } from 'react';
import Calculator from './Calculator';
import Portfolio from './Portfolio';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Portfolio } /> 
          <Route path='/react-mini/calculator' component={ Calculator } /> 
        </Switch>
      </div>
     );
  }
}

export default App;
