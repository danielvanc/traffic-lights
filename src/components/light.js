import React, { Component } from 'react';
import styled from 'styled-components'

const TrafficLight = styled.li`
  background: black;
  border-radius: 50%;
  height: 40px;
  width: 40px;
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
        className={`traffic-light ${lightID === 0 && 'current'}`}
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