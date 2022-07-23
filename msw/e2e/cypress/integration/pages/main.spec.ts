import { Pikachu } from "../../../../src/mocks/handlers";

describe('main', () => {
  it('when fetched data, then show UI with fetched data', () => {
    cy.visit('/')

    cy.get('p').contains(Pikachu.data.name)
    cy.get('img').should('have.attr', 'src').should('include', Pikachu.data.sprites.front_default)
  });
});