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

  getTodos() {
    return cy.get("ul li");
  }

  add(text) {
    cy.focused()
      .type(text)
      .type("{enter}");
  }
}

export default TodoPage;
