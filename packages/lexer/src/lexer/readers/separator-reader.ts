import { LexerTokenReader } from "../../types/lexer";
import { TokenType } from "../../types";

const SeparatorReader: LexerTokenReader = {
  read: (input, lexer) => {
    if (!lexer.options.separators) {
      lexer.next();
      return lexer.getNextToken(input);
    }

    const start = lexer.currentPos;
    let end = lexer.currentPos;

    // Whitespace
    if (
      lexer.options.separators.whitespace &&
      lexer.dialect.isWhitespace(input[end])
    ) {
      while (lexer.dialect.isWhitespace(input[end])) {
        end++;
        lexer.next();
      }

      return {
        type: TokenType.Separator,
        value: input.substring(start, end),
        start,
        end,
      };
    }

    // Line break
    if (
      lexer.options.separators.lineBreak &&
      lexer.dialect.isNewLine(input[end])
    ) {
      lexer.next();
      return {
        type: TokenType.Separator,
        value: input.substring(start, end + 1),
        start,
        end,
      };
    }

    lexer.next();
    return lexer.getNextToken(input);
  },
  match: (input, lexer) => lexer.dialect.isSeparator(input[lexer.currentPos]),
};

export { SeparatorReader };
