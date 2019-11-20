import React from 'react';
import TrafficData from '../src/data'
import AppContainer from './components/container'
import TrafficPanel from './components/traffic-panel'
import Lights from './components/lights'
import Buttons from './components/Buttons'

function App() {
  return (
    <AppContainer>
      <h1>Traffic Lights</h1>
      <TrafficPanel>
        <Lights tData={TrafficData} />
      </TrafficPanel>
      <Buttons />
    </AppContainer>
  );
}

export default App;
