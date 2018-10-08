import React from 'react';
import {Link, Redirect, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleChange(type) {
    return (e) => this.setState({
      [type]: e.currentTarget.value
    });
  }

  render () {
    let { errors, formType, processForm, currentUser } = this.props;

    return (
      <div>
        <h3>{formType}</h3>

        <ul>
          { errors.length > 0 ? (errors.map( (error, idx) => ( <li key={idx}>{error}</li> ))) : ""}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <label> Username: </label>
          <input type="text"
                 value={this.state.username}
                 onChange={this.handleChange('username')} ></input>


          <label> Password: </label>
          <input type="password"
                 value={this.state.password}
                 onChange={this.handleChange('password')} ></input>

               <input type="submit" value={formType}></input>
        </form>

        <Link to={formType==='Sign Up' ?  '/login' : '/signup'} >
        {formType==='Sign Up' ?  'Log In' : 'Sign Up'}</Link>

      </div>
    );
  }

}

export default withRouter(SessionForm);
