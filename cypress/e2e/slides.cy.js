import TodoPage from "../elements/pages/TodoPage";

describe("Slides for the pairing talk", () => {
  it("shows the checklist", () => {
    const todo = new TodoPage();
    todo.visit();

    todo.getTodos().should("length", 0);

    todo.add("c");

    todo
      .getTodos()
      .eq(0)
      .should("text", "1 - Ergonomics");
    todo
      .getTodos()
      .eq(1)
      .should("text", "2 - Distractions");
    todo
      .getTodos()
      .eq(2)
      .should("text", "3 - Regular breaks");
    todo
      .getTodos()
      .eq(3)
      .should("text", "4 - Plan");
    todo
      .getTodos()
      .eq(4)
      .should("text", "5 - Work");
  });

  it("shows the final slide", () => {
    const todo = new TodoPage();
    todo.visit();

    todo.getTodos().should("length", 0);

    todo.add("f");
    todo
      .getTodos()
      .eq(0)
      .should("text", "1 - Ergonomics");
    todo
      .getTodos()
      .eq(1)
      .should("text", "2 - Distractions");
    todo
      .getTodos()
      .eq(2)
      .should("text", "3 - Regular breaks");
    todo
      .getTodos()
      .eq(3)
      .should("text", "4 - Plan");
    todo
      .getTodos()
      .eq(4)
      .should("text", "5 - Work");
  });
});
