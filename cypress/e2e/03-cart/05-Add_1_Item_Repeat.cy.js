describe("user melakukan tambah 1 barang dari menu all item, kemudian masuk ke icon keranjang kemudian menambahkan 1 barang lagi", () => {
  it("Dashboard Bisa Diakses", () => {
    const inventoryUrl = Cypress.env("inventoryUrl");
    const cartUrl = "/cart.html";
    const itemIndex = 0;

    cy.visit(inventoryUrl).wait(1000);
    cy.url().should("include", "/inventory.html");
    cy.get(".inventory_item").eq(itemIndex).find("button").click();
    cy.get(".shopping_cart_badge").should("contain", "1");
    cy.get(".shopping_cart_container").click();
    cy.url().should("include", cartUrl);
    cy.get(".cart_footer > .btn_secondary").click();
    cy.get(".inventory_item")
      .eq(itemIndex + 1)
      .find("button")
      .click();
    cy.get(".shopping_cart_badge").should("contain", "2");
  });
});
