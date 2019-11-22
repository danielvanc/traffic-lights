import React, { Component } from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  border: 1px solid #CCC;
  border-radius: 12px;
  margin: 2em auto;
  max-width: 250px;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`
class container extends Component {
  render() {
    return (
      <AppContainer className="App">
        {this.props.children}
      </AppContainer>
    );
  }
}

export default container;