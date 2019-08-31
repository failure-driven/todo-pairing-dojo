class TodoPage {
  constructor() {}

  visit() {
    cy.visit("/");
  }

  getTitle() {
    return cy.get("h1");
  }

  getInput() {
    return cy.get("input");
  }
}

export default TodoPage;
