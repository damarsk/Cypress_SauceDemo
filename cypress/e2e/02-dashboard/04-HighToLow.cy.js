describe("Melakukan filter barang berdasarkan harga dari high ke low", function () {
  it("WEBSITE BERSHASIL DIBUKA", function () {
    const inventoryUrl = Cypress.env("inventoryUrl");
    const waitTime = 1000;
    const sortOption = "hilo";

    cy.visit(inventoryUrl).wait(waitTime);
    cy.get(".product_sort_container").select(sortOption);
  });
});
