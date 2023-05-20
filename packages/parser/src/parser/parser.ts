import { Lexer } from "lexer";

export class Parser {
  private readonly lexer: Lexer;

  constructor() {
    this.lexer = new Lexer();
  }

  static parse(input: string) {
    return new Parser().parse(input);
  }

  public parse(input: string) {
    const tokens = this.lexer.tokenize(input);
  }
}
