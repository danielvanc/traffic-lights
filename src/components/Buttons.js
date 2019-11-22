import React, { Component } from 'react';
import styled from 'styled-components'

const ButtonsContainer = styled.aside`
  button[type='button'] {
    display: block;
    margin-bottom: 15px;
  }
`

class Buttons extends Component {
  render() {
    // console.log(this.props)
    return (
      <ButtonsContainer className={`buttons-container`}>
        <button onClick={this.props.startLights} type="button">{!this.props.started ? 'Start' : 'Stop'} Lights</button>
        <button onClick={this.props.setDirection} type="button">{this.props.direction ? 'Forward' : 'Rewind'} Lights</button>
      </ButtonsContainer>
    );
  }
}

export default Buttons;