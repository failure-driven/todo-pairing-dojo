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

  it("can add a number of todos", () => {
    const todo = new TodoPage();
    todo.visit();

    todo.getTodos().should("length", 0);

    todo.add("buy some cheese");
    todo.add("feed the cat");

    todo.getTodos().should("length", 2);
  });

  it("can complete some todos", () => {
    const todo = new TodoPage();
    todo.visit();

    todo.add("buy some cheese");
    todo.add("feed the cat");

    todo.getTodos().should("length", 2);

    todo.getCompletedTodos().should("length", 0);

    todo.completeTodo(0);

    todo.getCompletedTodos().should("length", 1);
  });

  it.skip("can remove some todos", () => {
    const todo = new TodoPage();
    todo.visit();

    todo.add("buy some cheese");
    todo.add("feed the cat");

    todo.getTodos().should("length", 2);

    todo.removeTodo(0);
  });
});
