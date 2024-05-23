const cypressWait = (timeout: number) => {
  cy.wait(timeout);
  Cypress.on("uncaught:exception", () => {
    return false;
  });
};

const visitBroadbandAcquisitionAffiliatesPage = () =>
  cy.visit(Cypress.env("cypress_base_affiliates_url"));

const visitBroadbandAcquisitionDealsPage = () =>
  cy.visit(Cypress.env("cypress_base_deals_url"));

export {
  cypressWait,

  visitBroadbandAcquisitionAffiliatesPage,
  visitBroadbandAcquisitionDealsPage,

};
