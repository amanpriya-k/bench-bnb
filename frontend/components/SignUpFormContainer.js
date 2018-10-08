import {connect} from 'react-redux';
import SessionForm from './SessionForm'
import {signup} from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.sessionErrors,
  formType: 'Sign Up',
  currentUser: state.session.id
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
