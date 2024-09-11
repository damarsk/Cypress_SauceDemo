describe("Login Negatif username benar(terkunci) password benar", function () {
  it("WEBSITE BERSHASIL DIBUKA", function () {
    const baseUrl = Cypress.env("baseUrl");
    const lockedUser = Cypress.env("lockedUser");
    const password = Cypress.env("password");

    cy.visit(baseUrl).wait(1000);
    cy.get("#user-name").type(lockedUser);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
    cy.wait(1000);
  });
});
