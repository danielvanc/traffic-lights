import React, { Component } from 'react';

class TrafficPanel extends Component {
  render() {
    return (
      <div className="traffic-panel">
        {this.props.children}
      </div>
    );
  }
}

export default TrafficPanel;