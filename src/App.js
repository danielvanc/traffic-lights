import React from 'react';
import Helmet from 'react-helmet'
import TrafficData from '../src/data'
import AppContainer from './components/container'
import TrafficPanel from './components/traffic-panel'
import Lights from './components/lights'
import Buttons from './components/Buttons'

function App() {
  return (
    <AppContainer>
      <Helmet>
        <title>Traffic Lights</title>
      </Helmet>
      <h1>Traffic Lights</h1>
      <TrafficPanel>
        <Lights tData={TrafficData} />
      </TrafficPanel>
      <Buttons />
    </AppContainer>
  );
}

export default App;
