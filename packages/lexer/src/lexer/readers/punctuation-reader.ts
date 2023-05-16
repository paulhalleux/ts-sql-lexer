import { LexerTokenReader } from "../../types/lexer";
import { Punctuation } from "../../contants/punctuation";
import { TokenType } from "../../types";

const PunctuationReader: LexerTokenReader = {
  read: (input, lexer) => {
    for (const symbol of Punctuation) {
      if (input.startsWith(symbol, lexer.currentPos)) {
        lexer.next(symbol.length);
        return {
          type: TokenType.Punctuation,
          value: symbol,
          start: lexer.currentPos - symbol.length,
          end: lexer.currentPos - 1,
        };
      }
    }

    throw new Error(`Unexpected punctuation: ${input[lexer.currentPos]}`);
  },
  match: (input, lexer) => lexer.dialect.isPunctuation(input[lexer.currentPos]),
};

export { PunctuationReader };
