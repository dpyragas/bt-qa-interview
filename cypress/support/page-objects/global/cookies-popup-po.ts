// Logic to grab from an IFRAME
const getCookiesPopup = () => {
  return cy
    .get(".truste_popframe")
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
};

const getCookiesPopupAcceptButton = () =>
  getCookiesPopup().find(".mainContent").find(".pdynamicbutton").find(".call");

export { getCookiesPopup, getCookiesPopupAcceptButton };
