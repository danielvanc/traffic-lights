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
    return (
      <ButtonsContainer className={`buttons-container`}>
        <button type="button">Stop Lights</button>
        <button type="button">Rewind Lights</button>
        <button type="button">Forward Lights</button>
      </ButtonsContainer>
    );
  }
}

export default Buttons;