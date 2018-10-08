import {connect} from 'react-redux';
import SessionForm from './SessionForm'
import {login} from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.sessionErrors,
  formType: 'Login',
  currentUser: state.session.id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
