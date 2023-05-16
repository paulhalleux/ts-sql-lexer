import { LexerTokenReader } from "../../types/lexer";
import { TokenType } from "../../types";

const IdentifierReader: LexerTokenReader = {
  read: (input, lexer) => {
    const start = lexer.currentPos;
    let end = lexer.currentPos;

    while (lexer.dialect.isIdentifierPart(input[end])) {
      end++;
      lexer.next();
    }

    const value = input.substring(start, end);

    return {
      type: lexer.dialect.isKeyword(value)
        ? isBoolean(value)
          ? TokenType.LiteralBoolean
          : TokenType.Keyword
        : TokenType.Identifier,
      value,
      start,
      end: end - 1,
    };
  },
  match: (input, lexer) =>
    lexer.dialect.isIdentifierStart(input[lexer.currentPos]),
};

function isBoolean(value: string) {
  return value.toLowerCase() === "true" || value.toLowerCase() === "false";
}

export { IdentifierReader };
