describe("Melakukan filter barang berdasarkan abjad dari Z ke A", function () {
  it("WEBSITE BERSHASIL DIBUKA", function () {
    const inventoryUrl = Cypress.env("inventoryUrl");
    const waitTime = 1000;
    const sortOption = "za";

    cy.visit(inventoryUrl).wait(waitTime);
    cy.get(".product_sort_container").select(sortOption);
  });
});
