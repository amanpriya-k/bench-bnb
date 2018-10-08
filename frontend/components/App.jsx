import React from 'react';
import GreetingContainer from './greeting_container'
import LoginFormContainer from './LoginFormContainer'
import SignUpFormContainer from './SignUpFormContainer'
import {Route} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>BenchBnB</h1>
      <Route exact path="/" component={GreetingContainer}/>
    </header>

    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);

export default App;
