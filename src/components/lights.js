import React, { Component } from 'react';
import styled from 'styled-components'
import Light from './light'

const TrafficLights = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

class Lights extends Component {

  render() {

    const RenderLights = () => (
      <TrafficLights className="traffic-lights">
        {
          this.props.tData.map(({ color }, index) => (
            <Light key={index} lightID={index} color={color} />
          ))
        }
      </TrafficLights>
    )

    return (
        this.props.tData.length ? (<RenderLights />) : (<p>No traffic data received</p>)
    )
  }
}

export default Lights;