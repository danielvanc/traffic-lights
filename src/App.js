import React, { Component } from 'react';
import Helmet from 'react-helmet'
import styled, { css, createGlobalStyle } from 'styled-components'
import TrafficData from '../src/data'
import AppContainer from './components/container'
import TrafficPanel from './components/traffic-panel'
import Lights from './components/lights'
import Buttons from './components/Buttons'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`

const complexMixin = css`
  color: ${props => (props.greenColor ? 'green' : 'black')};
`

const PageHeading = styled.h1`
  ${props => (props.complex ? complexMixin : 'color: blue;')};
  margin: 0 0 1em 0;
`

class App extends Component {
  constructor(props) {
    super(props);
    /**
     *  Set some state for the
     *  Current Light,
     *  Current Direction
     *  Has the user pressed the switch
    */
    this.state = {
      light: 0,
      direction: true, // default: fowards
      started: false
    }
  }

  componentDidUpdate() {
    /**
     * After update, If switch has been started, fire up
     */
    this.state.started && this.startTimer();
  }

  handleStartLights = () => {
    /**
     * Set started to opposite to what it currently is
     */
    this.setState({ started: !this.state.started })
  }

  manageLightsForward = () => {
    /**
     *  Clear each interval for each render / stop
     */
    clearInterval(this.timerProp)
    let currentLight = this.state.light;
    
    if (this.state.started) {
      /**
       *  Is the flow going in forwards direction?
       */
      if (this.state.direction && currentLight <=2) {
        /**
         * Check to see if we're on green, if so go back
         * to amber
         */
        if (currentLight === 2) return this.setState({
          'direction': false
        })
        this.setState({
          light: currentLight +=1
        })
      }
      /**
       *  Is the flow going in forwards direction?
       */
      if (!this.state.direction && currentLight >= 0) {
        /**
         *  Check to see if we're on red, if so, go to
         *  amber
         */
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
    /**
     * set a timer for each phase in light routine
     */
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
        <GlobalStyles />
        <PageHeading complex greenColor>Traffic Lights</PageHeading>
        <TrafficPanel>
          <Lights 
            tData={TrafficData} 
            currentLight={this.state.light} 
          />
        </TrafficPanel>
        <Buttons
          started={this.state.started}
          setDirection={this.handleLightsDirection}
          startLights={this.handleStartLights}
        />
      </AppContainer>
    );
  }
}

export default App;
