describe("User melakukan checkout barang", () => {
  it("Dashboard Bisa Diakses", () => {
    const inventoryUrl = Cypress.env("inventoryUrl");
    const firstName = "Ayu";
    const lastName = "Dian";
    const postalCode = "45234";

    cy.visit(inventoryUrl).wait(1000);
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").eq(0).find("button").click();
    cy.get(".inventory_item").eq(1).find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "2");
    cy.get(".shopping_cart_container").click();
    cy.url().should("include", "/cart.html");
    cy.get(".btn_action").click();
    cy.url().should("include", "/checkout-step-one.html");
    cy.get("#first-name").type(firstName);
    cy.get("#last-name").type(lastName);
    cy.get("#postal-code").type(postalCode);
    cy.get(".btn_primary").click();
    cy.url().should("include", "/checkout-step-two.html");
    cy.get(".btn_action").click();
    cy.url().should("include", "/checkout-complete.html");
  });
});
