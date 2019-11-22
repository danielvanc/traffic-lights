import React, { Component } from 'react';
import styled from 'styled-components'

const Panel = styled.main`
  margin: 0 0 2em 0;
`

class TrafficPanel extends Component {
  render() {
    return (
      <Panel className="traffic-panel">
        {this.props.children}
      </Panel>
    );
  }
}

export default TrafficPanel;