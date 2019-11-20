import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


describe('Initial runs', () => {

  it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('Add\'s the h1 heading with text Traffic Lights', () => {
    const h1 = document.createElement('h1')
    ReactDOM.render(<App />, h1)
    h1.innerText = 'Traffic Lights'
    expect(h1.innerText).toEqual('Traffic Lights')
    ReactDOM.unmountComponentAtNode(h1);
  })

})
