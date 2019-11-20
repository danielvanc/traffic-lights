import React, { Component } from 'react';
import styled from 'styled-components'

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
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