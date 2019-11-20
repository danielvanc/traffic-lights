import React from 'react';
import 
{ render, unmountComponentAtNode } from 'react-dom';
import App from '../App';

let container = null;

beforeAll(() => {
  container = document.createElement('div');
  render(<App />, container);
});


describe('Initial runs', () => {
  
  it('Find h1 + check txt equals Traffic Lights', () => {
    const h1 = container.querySelector('h1')
    expect(h1.textContent).toEqual('Traffic Lights')
    unmountComponentAtNode(h1);
  })

})

afterAll(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})