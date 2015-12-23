import React, { Component, PropTypes } from 'react';

class Mcq extends Component {
  render() {
    const { type } = this.props;
    return (
      <p>
        {type}
      </p>
    );
  }
}

Mcq.propTypes = {
  // increment: PropTypes.func.isRequired,
  // incrementIfOdd: PropTypes.func.isRequired,
  // incrementAsync: PropTypes.func.isRequired,
  // decrement: PropTypes.func.isRequired,
  // counter: PropTypes.number.isRequired
  type: PropTypes.string
};

export default Mcq;
