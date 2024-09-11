describe("user melakukan hapus 1 barang dari keranjang", () => {
  it("Dashboard Bisa Diakses", () => {
    const inventoryUrl = Cypress.env("inventoryUrl");
    const cartUrl = "/cart.html";
    const itemIndex = 0;
    const waitTime = 1000;

    cy.visit(inventoryUrl).wait(waitTime);
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").eq(itemIndex).find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.get(".shopping_cart_container").click();
    cy.url().should("include", cartUrl);
    cy.get(".cart_button").click();
  });
});
