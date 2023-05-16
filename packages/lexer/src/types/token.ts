/**
 * SQL Language Token Type
 */
export enum TokenType {
  Keyword = "keyword",
  Identifier = "identifier",
  Punctuation = "punctuation",
  LiteralString = "literal-string",
  LiteralNumeric = "literal-numeric",
  LiteralBoolean = "literal-boolean",
  Operator = "operator",
  Separator = "separator",
}

/**
 * SQL Language Token
 * @property {TokenType} type - Token Type
 * @property {string} value - Token Value
 * @property {number} start - Token Start Position
 * @property {number} end - Token End Position
 */
export type Token = {
  type: TokenType;
  value: string;
  start: number;
  end: number;
};

/**
 * SQL Language Literal Quote Type
 */
export enum LiteralQuoteType {
  Single = "'",
  Double = '"',
}
