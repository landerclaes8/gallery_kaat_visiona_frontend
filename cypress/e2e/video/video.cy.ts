describe("list of video's", () => {
  beforeEach(() => {
    cy.login("admin@example.com", "abcde12345");
    cy.visit("/admin");

    cy.dataCy("button-video").click();
    cy.url().should("include", "admin/video");
  });

  it("should show a list of all videos", () => {
    cy.get('[data-cy="video-list"] tbody tr').should("have.length", 1);
  });

  it("should add a new video", () => {
    cy.dataCy("video-create-form").should("be.visible", true);

    cy.dataCy("video-form-title").clear();
    cy.dataCy("video-form-title").type("New video");

    cy.dataCy("video-form-description").clear();
    cy.dataCy("video-form-description").type("New description");

    cy.dataCy("video-form-category").click();
    cy.wait(1000);
    cy.get(".mantine-Select-item").select("Boksen");
    cy.dataCy("video-form-category").should("have.value", "Boksen");

    cy.dataCy("video-form-filename").clear();
    cy.dataCy("video-form-filename").type("filename.mp4");

    cy.dataCy("video-form-submit").click();
    cy.get('[data-cy="video-list"] tbody tr').should("have.length", 2);
  });

  it("should delete video", () => {
    cy.dataCy("video-delete-button").last().click();
    cy.get('[data-cy="video-list"] tbody tr').should("have.length", 1);
  });
});
