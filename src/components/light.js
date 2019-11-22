import React, { Component } from 'react';
import styled from 'styled-components'

const TrafficLight = styled.li`
  background: #444;
  border-radius: 50%;
  height: 100px;
  margin: 5px 0;
  width: 100px;
  &.current {
    background: ${props => props.color};
  }
  span {
    visibility: hidden;
  }
`
class Light extends Component {
  render() {
    const { lightID, color } = this.props;
    return (
      <TrafficLight
        data-lightid={lightID}
        className={`traffic-light ${this.props.currentLight && 'current'}`}
        color={color}
      >
        <span>
          {color}
        </span>
      </TrafficLight>
    );
  }
}

export default Light;