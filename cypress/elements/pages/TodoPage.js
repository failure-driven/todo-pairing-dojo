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

  getCompletedTodos() {
    return cy.get('ul li[class="completed"]');
  }

  completeTodo(index) {
    this.getTodos()
      .get('input[type="checkbox"]')
      .eq(index)
      .click();
  }
}

export default TodoPage;
