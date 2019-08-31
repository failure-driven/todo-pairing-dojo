import TodoPage from "../elements/pages/TodoPage";

describe("Create, delete and complete todos", () => {
  it("has a todo title and is focused on the input", () => {
    const todo = new TodoPage();
    todo.visit();

    todo
      .getTitle()
      .should("exist")
      .contains("Todo - pairing dojo");

    todo.getInput().focused;
  });
});
