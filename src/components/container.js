import React, { Component } from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  border: 1px solid #333;
  margin: 2em auto;
  max-width: 800px;
  padding: 2em;
`

class container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: 0
    }
  }
  
  render() {
    return (
      <AppContainer>
        {this.props.children}
      </AppContainer>
    );
  }
}

export default container;