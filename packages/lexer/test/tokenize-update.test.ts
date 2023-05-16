import { Lexer } from "../src/lexer/lexer";

describe("testing tokenizer on update statement", () => {
  test("can tokenize simple update", () => {
    const result = new Lexer().tokenize("UPDATE table SET name = 'John'");
    expect(result).toHaveLength(6);
  });

  test("can tokenize with where", () => {
    const result = new Lexer().tokenize(
      "UPDATE table SET name = 'John' WHERE id = 1"
    );
    expect(result).toHaveLength(10);
  });

  test("can tokenize with where and sub-query", () => {
    const result = new Lexer().tokenize(
      "UPDATE table SET name = 'John' WHERE id = (SELECT id FROM table)"
    );
    expect(result).toHaveLength(15);
  });
});
