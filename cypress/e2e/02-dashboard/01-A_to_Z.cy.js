describe("Melakukan filter barang berdasarkan abjad dari A ke Zcypress/e2e/03-Cart/02-Cart_Positif.cy.js", function () {
  it("WEBSITE BERSHASIL DIBUKA", function () {
    const inventoryUrl = Cypress.env("inventoryUrl");
    const waitTime = 1000;
    const sortOption = "az";

    cy.visit(inventoryUrl).wait(waitTime);
    cy.get(".product_sort_container").select(sortOption);
  });
});
