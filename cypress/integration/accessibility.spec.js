describe("dummy form", () => {

  beforeEach(() => {
    cy.visit("");
  });

  it("should not report any errors during the accessibility audit", () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  const assertFocusedInputLabel = (expectedLabel) => {
    return cy.focused().then(($el) => {
      cy.get(`label[for="${$el.attr("id")}"]`).should(
        "have.text",
        expectedLabel
      );
    });
  };

  it("should allow submitting with just keyboard", () => {
    cy.findByText("Dummy form").should("be.visible").realClick();
    cy.realPress("Tab");
    assertFocusedInputLabel("Name:").realType("Dummy");
    cy.realPress("Tab");
    assertFocusedInputLabel("Last Name:").realType("User");
    cy.realPress("Tab");
    assertFocusedInputLabel("Books").realPress("Space");
    cy.realPress("Enter");
    cy.findByText("Thanks for submitting the form!").should("be.visible");
  });

});
