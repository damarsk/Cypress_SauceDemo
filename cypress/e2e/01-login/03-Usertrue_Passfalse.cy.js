describe("Login Negatif username benar password salah", function () {
  it("WEBSITE BERSHASIL DIBUKA", function () {
    const baseUrl = Cypress.env("baseUrl");
    const username = Cypress.env("username");
    const passwordFalse = Cypress.env("passwordFalse");

    cy.visit(baseUrl).wait(1000);
    cy.get("#user-name").type(username);
    cy.get("#password").type(passwordFalse);
    cy.get("#login-button").click();
    cy.wait(1000);
  });
});
