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

  componentDidMount() {
    !this.state.started && console.log('Not started');
    console.log('Mounted!');
  }

  componentDidUpdate() {
    if (this.state.started) {
      this.startTimer();
    } else {
      console.log('Stopped timer!');
    }
  }

  handleStartLights = () => {
    this.setState({ started: !this.state.started })
  }

  handleLightsDirection = () => {
    this.setState({
      started: true,
      direction: !this.state.direction
    })
  }

  manageLightsForward = () => {
    clearInterval(this.timerProp)
    let currentLight = this.state.light;
    
    if (this.state.started) {
      if (this.state.direction && currentLight <=2) {
        if (currentLight === 2) return this.setState({
          'direction': false
        })
        this.setState({
          light: currentLight +=1
        })
      }
      if (!this.state.direction && currentLight >= 0) {
        if (currentLight === 0) return this.setState({
          'direction': true
        })
        this.setState({
          light: currentLight -=1
        })
      }
    }
  }

  startTimer = () => {
    this.timerProp = setInterval(() => {
      this.manageLightsForward()
    }, 3000)
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
