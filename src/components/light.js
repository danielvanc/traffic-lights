import React, { Component } from 'react';
import styled from 'styled-components'

const TrafficLight = styled.li`

`
class Light extends Component {
  render() {
    const { lightID, color } = this.props;
    return (
      <TrafficLight
        data-lightid={lightID}
        className="traffic-light"
      >
        {color}
      </TrafficLight>
    );
  }
}

export default Light;