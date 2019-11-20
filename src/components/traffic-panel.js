import React, { Component } from 'react';
import styled from 'styled-components'

const Panel = styled.main`
  grid-column: 1;
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