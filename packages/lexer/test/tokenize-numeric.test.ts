import { Lexer } from "../src/lexer/lexer";

describe("testing tokenizer on numerics", () => {
  test("can tokenize with negative number", () => {
    const result = new Lexer().tokenize("SELECT -1 FROM table");
    expect(result).toHaveLength(4);
  });

  test("can tokenize with negative number in math", () => {
    const result = new Lexer().tokenize("SELECT 1 + -1 FROM table");
    expect(result).toHaveLength(6);
  });

  test("can tokenize with negative number and decimal", () => {
    const result = new Lexer().tokenize("SELECT -1.1 FROM table");
    expect(result).toHaveLength(4);
  });

  test("can tokenize with exponential number", () => {
    const result = new Lexer().tokenize("SELECT 1e2 FROM table");
    expect(result).toHaveLength(4);
  });

  test("can tokenize with exponential number and decimal", () => {
    const result = new Lexer().tokenize("SELECT 1.1e2 FROM table");
    expect(result).toHaveLength(4);
  });
});
