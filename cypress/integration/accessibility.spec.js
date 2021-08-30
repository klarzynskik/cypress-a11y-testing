describe("dummy form", () => {

  beforeEach(() => {
    cy.visit("");
  });

  it("should not report any errors during the accessibility audit", () => {
    cy.injectAxe();
    cy.checkA11y();
  });

});
