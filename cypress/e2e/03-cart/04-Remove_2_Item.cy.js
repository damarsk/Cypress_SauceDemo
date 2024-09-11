describe("user melakukan hapus 2 barang dari keranjang", () => {
  it("Dashboard Bisa Diakses", () => {
    const inventoryUrl = Cypress.env("inventoryUrl");
    const cartUrl = "/cart.html";
    const numItemsToRemove = 2;

    cy.visit(inventoryUrl).wait(1000);
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").eq(0).find("button").click();
    cy.get(".inventory_item").eq(1).find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "2");
    cy.get(".shopping_cart_container").click();
    cy.url().should("include", cartUrl);
    for (let i = 0; i < numItemsToRemove; i++) {
      cy.get(".cart_button").eq(0).click();
    }
  });
});
