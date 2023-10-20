/* eslint-disable no-undef */
describe('Login Page', () => {
  it('should go to login page from register page', () => {
    cy.visit('http://localhost:5173/register');

    cy.get('.link-to').click();

    cy.url().should('include', '/login');
  });

  it('should try to access /home page by url, but returns to login page', () => {
    cy.visit('http://localhost:5173/home');

    cy.url().should('include', '/login');
  });
});
