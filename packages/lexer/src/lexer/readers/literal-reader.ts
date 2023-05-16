import { LexerTokenReader } from "../../types/lexer";
import { LiteralQuoteType, TokenType } from "../../types";
import { isEscapedQuote } from "../../utils/literal";

const LiteralReader: LexerTokenReader = {
  read: (input, lexer) => {
    const quoteType: LiteralQuoteType = input[
      lexer.currentPos
    ] as LiteralQuoteType;
    const start = lexer.currentPos;
    let end = lexer.currentPos;

    while (end < input.length) {
      if (start === end && input[end] === quoteType) {
        end++;
        lexer.next();
        continue;
      }

      if (input[end] !== quoteType) {
        end++;
        lexer.next();
        continue;
      }

      if (isEscapedQuote(input, end, quoteType)) {
        end += 2;
        lexer.next(2);
        continue;
      }

      break;
    }

    const value = input.substring(start, end + 1);

    lexer.next();

    return {
      type: TokenType.LiteralString,
      value,
      start,
      end,
    };
  },
  match: (input, lexer) => lexer.dialect.isLiteral(input[lexer.currentPos]),
};

export { LiteralReader };
