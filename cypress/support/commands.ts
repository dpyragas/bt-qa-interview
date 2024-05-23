// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string): void;

    getByDataE2eId(selector: string): Chainable<JQuery<HTMLElement>>;
    getByDataTestId(selector: string): Chainable<JQuery<HTMLElement>>;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add("getByDataTestId", (selector: string) => {
  return cy.get(`[data-testid=${selector}]`);
});
