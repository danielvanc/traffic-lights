import React, { Component } from 'react';
import Helmet from 'react-helmet'
import TrafficData from '../src/data'
import AppContainer from './components/container'
import TrafficPanel from './components/traffic-panel'
import Lights from './components/lights'
import Buttons from './components/Buttons'

class App extends Component {

  // 1. On component mount, start the timer
  // 2. When timer has started, check the status of current light and direction (default fwd)
  // 2. Red: 10 seconds, Orange: 2 seconds, Green: 10 seconds
  // 3. Remove current class onChange and add to new light 
  // 4. Add transition when changing to new light?

  constructor(props) {
    super(props);
    
    this.state = {
      light: 0,
      direction: true, // default: fowards
      started: false
    }
  }

  handleStartLights = () => {
    console.log('Clicked!')
    this.setState({
      started: !this.state.started
    })
  }

  handleLightsDirection = () => {
    this.setState({
      started: true,
      direction: !this.state.direction
    })
  }

  componentDidMount() {
    !this.state.started && console.log('Not started');
  }
  
  componentDidUpdate() {
    this.state.started ? console.log("We've started") : console.log('Not started');
  }

  render() {
    return (
      <AppContainer>
        <Helmet>
          <title>Traffic Lights</title>
        </Helmet>
        <h1>Traffic Lights</h1>
        <TrafficPanel>
          <Lights tData={TrafficData} />
        </TrafficPanel>
        <Buttons
          started={this.state.started}
          direction={this.state.direction}
          setDirection={this.handleLightsDirection}
          startLights={this.handleStartLights}
        />
      </AppContainer>
    );
  }
}

export default App;
