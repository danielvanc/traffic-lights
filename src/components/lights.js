import React, { Component } from 'react';
import styled from 'styled-components'

const TrafficLights = styled.ul`
`

class Lights extends Component {

  render() {

    const RenderLights = () => (
      <TrafficLights className="traffic-lights">
        {
          this.props.tData.map(({ color }, index) => <li key={index} data-lightid={index}>{color}</li>)
        }
      </TrafficLights>
    )

    return (
        this.props.tData.length ? (<RenderLights />) : (<p>No traffic data received</p>)
    )
  }
}

export default Lights;