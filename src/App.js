import React from 'react';
import AppContainer from './components/container'
import TrafficPanel from './components/traffic-panel'
import Lights from './components/lights'
import Buttons from './components/Buttons'

function App() {
  return (
    <AppContainer>
      <h1>Traffic Lights</h1>
      <TrafficPanel>
        <Lights />
      </TrafficPanel>
      <Buttons />
    </AppContainer>
  );
}

export default App;
