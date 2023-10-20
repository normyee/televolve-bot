import randomEmail from 'random-email';

// Como não tenho controle do firebase para mockar a endpoint. Utilizei mockei o email.
const mockEmail = randomEmail({ domain: 'gmail.com' });

describe('Register Page', () => {
  it('should attempt to register with a mistyped email and receive the "Invalid Email!" message', () => {
    cy.visit('http://localhost:5173/register');

    cy.get('input[type="text"]').type('usertest@gmail');

    cy.get('input[type="password"]').type('123');

    cy.get('button[type="submit"]').click();

    cy.contains('Email inválido!').should('be.visible');
  });

  it('should attempt to register with a weak password and receive the "Senha fraca!" message', () => {
    cy.visit('http://localhost:5173/register');

    cy.get('input[type="text"]').type('usertest@gmail.com');

    cy.get('input[type="password"]').type('123');

    cy.get('button[type="submit"]').click();

    cy.contains('Senha fraca!').should('be.visible');
  });

  it('should attempt to register with a leaves email input blank and receive the "Ooops! Algo deu errado!" message', () => {
    cy.visit('http://localhost:5173/register');

    cy.get('input[type="password"]').type('123');

    cy.get('button[type="submit"]').click();

    cy.contains('Ooops! Algo deu errado!').should('be.visible');
  });

  it('should register successfully and go to home page', () => {
    cy.visit('http://localhost:5173/register');

    cy.get('input[type="text"]').type(`${mockEmail}`);

    cy.get('input[type="password"]').type('usertest123');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/home');
  });
});
