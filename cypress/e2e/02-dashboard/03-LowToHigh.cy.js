describe("Melakukan filter barang berdasarkan harga dari low ke high", function () {
  it("WEBSITE BERSHASIL DIBUKA", function () {
    const inventoryUrl = Cypress.env("inventoryUrl");
    const waitTime = 1000;
    const sortOption = "lohi";

    cy.visit(inventoryUrl).wait(waitTime);
    cy.get(".product_sort_container").select(sortOption);
  });
});
