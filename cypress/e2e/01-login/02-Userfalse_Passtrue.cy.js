describe("Login Negatif username salah password benar", function () {
  it("WEBSITE BERSHASIL DIBUKA", function () {
    const baseUrl = Cypress.env("baseUrl");
    const usernameFalse = Cypress.env("usernameFalse");
    const password = Cypress.env("password");

    cy.visit(baseUrl).wait(1000);
    cy.get("#user-name").type(usernameFalse);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
    cy.wait(1000);
  });
});
