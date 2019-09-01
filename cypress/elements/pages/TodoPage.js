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
      .get("span.checkmark")
      .eq(index)
      .click();
  }

  removeTodo(index) {
    this.getTodos()
      .eq(index)
      .trigger("mouseover")
      .get("button")
      .eq(index)
      .click({ force: true }); // mouseover above does not show the button?
    // TODO more info https://docs.cypress.io/api/commands/hover.html#Workarounds
  }
}

export default TodoPage;
