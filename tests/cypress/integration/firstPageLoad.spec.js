/// <reference types="Cypress" />

describe ('First page load', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  const defaultCity = "Copenhagen"
  
  it.only('Default city is correct', () => {   
    cy.get('.widget').should('be.visible')
      cy.get('.panel-heading').should('have.text', 'Weather in ' + defaultCity)
  })
    
  it.skip('Default URL shows the default city', () => {
    // Skipping since URL params implementation still not in place
    cy.get('.widget').should('be.visible')
      cy.location('pathname').should('equal', '/?city=' + defaultCity)
  })

})