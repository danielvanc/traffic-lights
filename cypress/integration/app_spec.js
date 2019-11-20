describe('Ensure page runs and tests in cypress', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Check that the app runs', () => {
    cy
      .get('#root')
      .find('h1')
  })
  it('Check app contains h1 and contains text', () => {
    cy.get('#root').find('h1').contains('Traffic Lights')
  })
  it('Check the app contains the traffic lights panel', () => {
    cy
      .get('#root')
      .find('.traffic-panel')
  })
})