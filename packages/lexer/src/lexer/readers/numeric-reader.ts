import { LexerTokenReader } from "../../types/lexer";
import { TokenType } from "../../types";

const NumericReader: LexerTokenReader = {
  read: (input, lexer) => {
    const start = lexer.currentPos;
    let end = lexer.currentPos;

    while (
      (lexer.dialect.isNumericStart(input[end]) && start === end) ||
      lexer.dialect.isNumericPart(input[end]) ||
      (lexer.dialect.isNumericPartChar(input[end]) &&
        input[end + 1] &&
        lexer.dialect.isNumericPart(input[end + 1]))
    ) {
      end++;
      lexer.next();
    }

    const value = input.substring(start, end);

    return {
      type: TokenType.LiteralNumeric,
      value,
      start,
      end: end - 1,
    };
  },
  match: (input, lexer) => {
    const currentChar = input[lexer.currentPos];

    const isSigned =
      lexer.dialect.isNumericStart(currentChar) &&
      input[lexer.currentPos + 1] &&
      lexer.dialect.isNumericPart(input[lexer.currentPos + 1]);
    const isUnsigned = lexer.dialect.isNumericPart(currentChar);

    return isSigned || isUnsigned;
  },
};

export { NumericReader };
