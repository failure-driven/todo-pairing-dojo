class TodoPage {
  constructor() {}

  visit() {
    cy.visit("/");
  }

  getTitle() {
    return cy.get("h1");
  }
}

export default TodoPage;
