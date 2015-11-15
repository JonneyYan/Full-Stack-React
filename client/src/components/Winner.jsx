import React, {Component} from 'react';

class Winner extends Component {
  getPair() {
    return this.props.pair || [];
  }
  isDisabled() {
    return !!this.props.hasVoted;
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
  render() {
    return (
      <div ref="winner">
        Winner is {this.props.winner}!
      </div>
    );
  }
}

export default Winner;
