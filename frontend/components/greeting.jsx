import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { currentUser, logout } = this.props;
    if (!currentUser) {
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <br></br>
          <Link to='/login'>Login</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h2> Welcome, {currentUser.username}! </h2>
          <br></br>
          <button onClick={logout}>Log Out</button>
        </div>
      );
    }
  }
}

export default Greeting;
