import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Mcq from '../components/Mcq';
import * as McqActions from '../actions/mcq';

function mapStateToProps(state) {
  return {
    // type: state.type
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(McqActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mcq);
