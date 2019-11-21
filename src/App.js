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
      started: true
    }
  }

  componentDidMount() {
    !this.state.started && console.log('Not started');
  }
  
  componentDidUpdate() {
    
  }

  componentWillUnmount() {
    console.log('Clearing timer...')
    clearInterval(this.timerProp);
  }

  handleStartLights = () => {
    console.log('Clicked!')
    const { started } = this.state;
    if (started) {
      console.log("We've started")
      this.startTimer();
    } else {
      console.log('Not started')
      this.stopTimer();
    }
  }

  handleLightsDirection = () => {
    this.setState({
      started: true,
      direction: !this.state.direction
    })
  }

  manageLightsForward = () => {
    console.log('Manage lights forward');
    let currentLight = this.state.light;

    if (currentLight >= 0 && currentLight <= 2) {

      // Are the lights on green
      if (currentLight === 2) {
        return this.setState({
          direction: false,
          light: currentLight -= 1
        })
      }
      // Are the lights on red?
      if (currentLight === 0) {
        return this.setState({
          direction: true,
          light: currentLight += 1
        })
      }
      // Must be on amber light
      return this.setState({ light: currentLight += 1 })
    }
    // Something must have gone wrong to get here...
    return this.setState({ light: currentLight -= 1 })
  }

  // manageLightsBackward = () => {
  //   console.log('Manage lights backward');
  // }

  startTimer = () => {
    console.log('Starting timer...');
    this.setState({ started: !this.state.started })
    this.timerProp = setInterval(() => {
      // console.log('Change to next light...');
      this.manageLightsForward()
      // if (this.state.direction) {
      //   this.manageLightsForward()
      // } else {
      //   this.manageLightsBackward()
      // }
      clearInterval(this.timerProp)
    }, 3000)
  }

  stopTimer = () => {
    console.log('Stopped timer!');
    clearInterval(this.timerProp)
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
