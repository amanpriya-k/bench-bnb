import React from 'react';
import GreetingContainer from './greeting_container'
import LoginFormContainer from './LoginFormContainer'
import SignUpFormContainer from './SignUpFormContainer'
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SearchContainer from './search_container'

const App = () => (
  <div>
    <header>
      <h1>BenchBnB</h1>
      <Route exact path="/" component={GreetingContainer}/>
    </header>

    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;
