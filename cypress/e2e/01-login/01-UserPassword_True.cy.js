describe("Login Positif username benar password benar", function () {
  it("WEBSITE BERSHASIL DIBUKA", function () {
    const baseUrl = Cypress.env("baseUrl");
    const username = Cypress.env("username");
    const password = Cypress.env("password");

    cy.visit(baseUrl).wait(1000);
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
    cy.wait(1000);
  });
});
