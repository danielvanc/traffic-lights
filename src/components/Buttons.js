import React, { Component } from 'react';
import styled from 'styled-components'

const ButtonsContainer = styled.aside`
  button[type='button'] {
    border-radius: 8px;
    cursor: pointer;
    display: block;
    font-size: 1.2em;
    margin-bottom: 15px;
    padding: 1em;
  }
`

class Buttons extends Component {
  render() {
    // console.log(this.props)
    return (
      <ButtonsContainer className={`buttons-container`}>
        <button 
          onClick={this.props.startLights} 
          type="button">
            {!this.props.started ? 'Start' : 'Stop'} Lights</button>
      </ButtonsContainer>
    );
  }
}

export default Buttons;