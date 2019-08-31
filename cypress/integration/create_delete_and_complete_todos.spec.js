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

  it.skip("can add a number of todos", () => {
    const todo = new TodoPage();
    todo.visit();

    todo.getTodos().should("length", 0);

    todo.add("buy some cheese");
    todo.add("feed the cat");

    todo.getTodos().should("length", 2);
  });
});
