import { Lexer } from "../src/lexer/lexer";

describe("testing tokenizer on drop table statement", () => {
  test("can tokenize simple drop table", () => {
    const result = new Lexer().tokenize("DROP TABLE [dbo].[TableName]");
    expect(result).toHaveLength(5);
    expect(result).toMatchObject([
      { type: "identifier", value: "DROP", start: 0, end: 3 },
      { type: "keyword", value: "TABLE", start: 5, end: 9 },
      { type: "identifier", value: "[dbo]", start: 11, end: 15 },
      { type: "punctuation", value: ".", start: 16, end: 16 },
      { type: "identifier", value: "[TableName]", start: 17, end: 27 },
    ]);
  });

  test("can tokenize simple drop table", () => {
    const result = new Lexer().tokenize(
      "DROP TABLE IF EXISTS [dbo].[TableName]"
    );
    expect(result).toHaveLength(7);
    expect(result).toMatchObject([
      { type: "identifier", value: "DROP", start: 0, end: 3 },
      { type: "keyword", value: "TABLE", start: 5, end: 9 },
      { type: "identifier", value: "IF", start: 11, end: 12 },
      { type: "keyword", value: "EXISTS", start: 14, end: 19 },
      { type: "identifier", value: "[dbo]", start: 21, end: 25 },
      { type: "punctuation", value: ".", start: 26, end: 26 },
      { type: "identifier", value: "[TableName]", start: 27, end: 37 },
    ]);
  });
});
