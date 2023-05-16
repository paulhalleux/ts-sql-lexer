import { Token } from "../types";
import { LexerOptions } from "../types/lexer";
import { BaseDialect } from "../dialects/dialect";
import { NumericReader } from "./readers/numeric-reader";
import { PunctuationReader } from "./readers/punctuation-reader";
import { LiteralReader } from "./readers/literal-reader";
import { IdentifierReader } from "./readers/identifier-reader";
import { SeparatorReader } from "./readers/separator-reader";
import { OperatorReader } from "./readers/operator-reader";

const readers = [
  NumericReader,
  IdentifierReader,
  OperatorReader,
  PunctuationReader,
  LiteralReader,
  LiteralReader,
  SeparatorReader,
];

export class Lexer {
  public readonly dialect: BaseDialect;
  public tokens: Token[] = [];
  public currentPos = 0;

  constructor(
    public readonly options: LexerOptions = {
      dialect: new BaseDialect(),
    }
  ) {
    this.dialect = options.dialect;
  }

  /**
   * Get next token from input.
   * @param input - SQL input
   * @returns {Token | null} - Token or null
   */
  getNextToken(input: string): Token | null {
    if (this.currentPos >= input.length) {
      return null;
    }

    const currentChar = input[this.currentPos];
    const reader = readers.find((reader) => reader.match(input, this));
    if (reader) {
      return reader.read(input, this);
    }

    throw new Error(`Unexpected character: ${currentChar}`);
  }

  /**
   * Tokenize SQL input.
   * @param {string} input - SQL input
   * @returns {Token[]} - Array of Tokens
   */
  tokenize(input: string): Token[] {
    let token = this.getNextToken(input);
    while (token !== null) {
      this.tokens.push(token);
      token = this.getNextToken(input);
    }
    return this.reset();
  }

  /**
   * Reset lexer.
   * @returns {void}
   */
  reset() {
    const list = [...this.tokens];
    this.tokens = [];
    this.currentPos = 0;
    console.log(list);
    return list;
  }

  /**
   * Move lexer position.
   * @param count - Number of characters to move
   */
  next(count = 1) {
    this.currentPos += count;
  }
}
