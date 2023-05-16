import { Lexer } from "../src/lexer/lexer";
import { LexerOptions } from "../src/types/lexer";
import { BaseDialect } from "../src/dialects/dialect";

describe("testing tokenizer on separators", () => {
  test("enable separator - whitespace", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        whitespace: true,
      },
    };

    const result = new Lexer(options).tokenize("SELECT * FROM table");
    expect(result).toHaveLength(7);
  });

  test("enable separator - whitespace - multiples", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        whitespace: true,
      },
    };

    const result = new Lexer(options).tokenize("SELECT  * FROM   table ");
    expect(result).toHaveLength(8);
  });

  test("enable separator - line break - between keyword and identifier", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        lineBreak: true,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table\nWHERE id = 10"
    );
    expect(result).toHaveLength(9);
  });

  test("enable separator - line break - between spaces", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        lineBreak: true,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table \n WHERE id = 10"
    );
    expect(result).toHaveLength(9);
  });

  test("enable separator - line break - multiples", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        lineBreak: true,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table \n\n\r WHERE id = 10"
    );
    expect(result).toHaveLength(11);
  });
});
