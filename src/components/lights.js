import React, { Component } from 'react';
import styled from 'styled-components'
import Light from './light'

const TrafficLights = styled.ul`
  background: black;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 5px 10px;
  height: 400px;
  width: 200px;
`

class Lights extends Component {

  render() {

    const RenderLights = () => (
      <TrafficLights className="traffic-lights">
        {
          this.props.tData.map(({ color }, index) => (
            <Light 
              key={index} 
              lightID={index} 
              color={color} 
              currentLight={index === this.props.currentLight ? true : false}
            />
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