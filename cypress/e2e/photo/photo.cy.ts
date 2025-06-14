describe("list of foto's", () => {
  beforeEach(() => {
    cy.login("admin@example.com", "abcde12345");
    cy.visit("/admin");

    cy.dataCy("button-photo").click();
    cy.url().should("include", "admin/photo");
  });

  it("should show a list of all photos", () => {
    cy.get('[data-cy="photo-list"] tbody tr').should("have.length", 3);
  });

  it("should add a new photo", () => {
    cy.dataCy("photo-create-form").should("be.visible", true);

    cy.dataCy("photo-form-title").clear();
    cy.dataCy("photo-form-title").type("New photo");

    cy.dataCy("photo-form-description").clear();
    cy.dataCy("photo-form-description").type("New description");

    cy.dataCy("photo-form-category").click();
    cy.wait(1000);
    cy.get(".mantine-Select-item").select("Boksen");
    cy.dataCy("photo-form-category").should("have.value", "Boksen");

    cy.dataCy("photo-form-album").click();
    cy.wait(1000);
    cy.get(".mantine-Select-item").select("Jongerentravel");
    cy.dataCy("photo-form-category").should("have.value", "Jongerentravel");

    cy.dataCy("photo-form-filename").clear();
    cy.dataCy("photo-form-filename").type("filename.webp");

    cy.dataCy("photo-form-submit").click();
    cy.get('[data-cy="video-list"] tbody tr').should("have.length", 4);
  });

  it("should delete photo", () => {
    cy.dataCy("photo-delete-button").last().click();
    cy.get('[data-cy="photo-list"] tbody tr').should("have.length", 3);
  });
});
