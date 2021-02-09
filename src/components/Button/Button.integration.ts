describe('My Component', () => {
  it('should respond to click on button with warning', () => {
    cy.visit('iframe.html?id=inputs-button--primary')
    cy.get('button')
  })
})
