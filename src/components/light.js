import React, { Component } from 'react';

class Light extends Component {
  render() {
    const { lightID, color } = this.props;
    return (
      <li data-lightid={lightID}>{color}</li>
    );
  }
}

export default Light;