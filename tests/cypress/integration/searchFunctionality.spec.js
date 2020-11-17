/// <reference types="Cypress" />

describe ('Search functionality', () => {
  beforeEach(() => {
      cy.visit('/')
    })

  it('Search functionality returns correct city', () => {
    const cityname = 'Odense'
    cy.get('.widget').should('be.visible')
    cy.get('#city').type(cityname)
    cy.get('#search_button').click()
      .then(() => {
        cy.get('#city_heading').should('have.text', cityname)
      //cy.location('pathname').should('equal', '/?city='+cityname)
      });
  });

  it.skip('Err msg appears on UI when incorrect city is searched', () => {
    // Skipping since implementation of err msg is not yet in place
    const cityWrong = 'Odnse'
    cy.get('.widget').should('be.visible')
      cy.get('#city').type(cityWrong)
      cy.get('#search_button').click()
        .then(() => {
          cy.contains('.error-messages li', 'please enter a valid city')
        })
      });
})