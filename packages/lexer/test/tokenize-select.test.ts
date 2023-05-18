import { Lexer } from "../src/lexer/lexer";

describe("testing tokenizer on select statement", () => {
  test("can tokenize with select star", () => {
    const result = new Lexer().tokenize("SELECT * FROM table");
    expect(result).toHaveLength(4);
  });

  test("can tokenize with where", () => {
    const result = new Lexer().tokenize("SELECT * FROM table WHERE id = 1");
    expect(result).toHaveLength(8);
  });

  test("can tokenize with order by", () => {
    const result = new Lexer().tokenize(
      "SELECT * FROM table WHERE id = 1 ORDER BY id"
    );
    expect(result).toHaveLength(11);
  });

  test("can tokenize with limit", () => {
    const result = new Lexer().tokenize(
      "SELECT * FROM table WHERE id = 1 ORDER BY id LIMIT 10"
    );
    expect(result).toHaveLength(13);
  });

  test("can tokenize with offset", () => {
    const result = new Lexer().tokenize(
      "SELECT * FROM table WHERE id = 1 ORDER BY id LIMIT 10 OFFSET 5"
    );
    expect(result).toHaveLength(15);
  });

  test("can tokenize with select alias", () => {
    const result = new Lexer().tokenize("SELECT id AS user_id FROM table");
    expect(result).toHaveLength(6);
  });

  test("can tokenize with select function", () => {
    const result = new Lexer().tokenize("SELECT COUNT(*) FROM table");
    expect(result).toHaveLength(7);
  });

  test("can tokenize with select case", () => {
    const result = new Lexer().tokenize(
      "SELECT CASE WHEN id = 1 THEN 'one' WHEN id = 2 THEN 'two' ELSE 'other' END FROM table"
    );
    expect(result).toHaveLength(19);
  });

  test("can tokenize with escaped single quotes", () => {
    const result = new Lexer().tokenize("SELECT 'It''s a string' FROM table");
    expect(result).toHaveLength(4);
  });

  test("can tokenize with escaped backslash", () => {
    const result = new Lexer().tokenize("SELECT '\\\\' FROM table");
    expect(result).toHaveLength(4);
  });

  test("can tokenize with escaped quote at start", () => {
    const result = new Lexer().tokenize("SELECT '''home' FROM table");
    expect(result).toHaveLength(4);
  });

  test("can tokenize with escaped quote at end", () => {
    const result = new Lexer().tokenize("SELECT 'home''' FROM table");
    expect(result).toHaveLength(4);
  });

  test("can tokenize with math", () => {
    const result = new Lexer().tokenize("SELECT 1 + 1 FROM table");
    expect(result).toHaveLength(6);
  });

  test("can tokenize with complex math", () => {
    const result = new Lexer().tokenize("SELECT 1 + 1 * 2 FROM table");
    expect(result).toHaveLength(8);
  });

  test("can tokenize with complex math and parenthesis", () => {
    const result = new Lexer().tokenize("SELECT (1 + 1) * 2 FROM table");
    expect(result).toHaveLength(10);
  });

  test("can tokenize with sub-query", () => {
    const result = new Lexer().tokenize("SELECT * FROM (SELECT * FROM table)");
    expect(result).toHaveLength(9);
  });

  test("can tokenize with sub-query and alias", () => {
    const result = new Lexer().tokenize(
      "SELECT * FROM (SELECT * FROM table) AS t"
    );
    expect(result).toHaveLength(11);
  });

  test("can tokenize with sub-query in select", () => {
    const result = new Lexer().tokenize(
      "SELECT (SELECT *, table.column FROM table) FROM table"
    );
    expect(result).toHaveLength(13);
  });

  test("can tokenize with boolean", () => {
    const result = new Lexer().tokenize("SELECT * FROM table WHERE id = true");
    expect(result).toHaveLength(8);
  });
});
