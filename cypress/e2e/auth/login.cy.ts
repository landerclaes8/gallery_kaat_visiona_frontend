describe("user login", () => {
  it("should login the user as an admin", () => {
    cy.login("admin@visiona.be", "visiona258!");
  });
});
