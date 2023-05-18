import { Lexer } from "../src/lexer/lexer";
import { LexerOptions } from "../src/types/lexer";
import { BaseDialect } from "../src/dialects/dialect";
import { throws } from "assert";

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

  test("enable separator - comment - single line", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        comment: true,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table -- comment"
    );
    expect(result).toHaveLength(5);
  });

  test("enable separator - comment - single line - multiples", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        comment: true,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table -- comment\n-- comment"
    );
    expect(result).toHaveLength(6);
  });

  test("enable separator - comment - multi line", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        comment: true,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table /* comment */"
    );
    expect(result).toHaveLength(5);
  });

  test("enable separator - comment - multi line - multiples", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        comment: true,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table /* comment */ /* comment */"
    );
    expect(result).toHaveLength(6);
  });

  test("enable separator - comment - multi line - multiples lines", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        comment: true,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table /* comment\ncomment line two */"
    );
    expect(result).toHaveLength(5);
  });

  test("enable separator - comment - multi line - nested", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        comment: true,
      },
    };

    throws(() => {
      const result = new Lexer(options).tokenize(
        "SELECT * FROM table /* comment /* nested */ */"
      );
    });
  });

  test("enable separator - comment - multi line - nested", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        comment: false,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table /* comment /* nested */"
    );
    expect(result).toHaveLength(4);
  });

  test("enable separator - all", () => {
    const options: LexerOptions = {
      dialect: new BaseDialect(),
      separators: {
        comment: true,
        lineBreak: true,
        whitespace: true,
      },
    };

    const result = new Lexer(options).tokenize(
      "SELECT * FROM table /* comment */\nWHERE id = 10 -- comment"
    );
    expect(result).toHaveLength(19);
  });
});
