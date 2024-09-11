describe("Memasukan 1 item ke keranjang", () => {
  const inventoryUrl = Cypress.env("inventoryUrl");
  const waitTime = 1000;

  it("Dashboard Bisa Diakses", () => {
    cy.visit(inventoryUrl).wait(waitTime);
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").eq(0).find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });
});
