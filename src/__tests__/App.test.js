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
  it('Page loads without crashing', () => {
    expect(container.querySelector("h1")).toBeTruthy()
  })

  it('Find h1 + check txt equals Traffic Lights', () => {
    const h1 = container.querySelector('h1')
    expect(h1.textContent).toEqual('Traffic Lights')
    unmountComponentAtNode(h1);
  })

  it('Finds and Shows Traffic light panel', () => {
    // 1. Find traffic light panel
    const panel = container.querySelector('.traffic-panel')
    expect(panel).toBeTruthy();
  })
})

afterAll(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})