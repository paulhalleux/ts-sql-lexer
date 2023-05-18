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
    if (lexer.dialect.isWhitespace(input[end])) {
      while (lexer.dialect.isWhitespace(input[end])) {
        end++;
        lexer.next();
      }

      if (lexer.options.separators.whitespace) {
        return {
          type: TokenType.Separator,
          value: input.substring(start, end),
          start,
          end,
        };
      } else {
        return lexer.getNextToken(input);
      }
    }

    // Line break
    if (lexer.dialect.isNewLine(input[end])) {
      lexer.next();
      if (lexer.options.separators.lineBreak) {
        return {
          type: TokenType.Separator,
          value: input.substring(start, end + 1),
          start,
          end,
        };
      } else {
        return lexer.getNextToken(input);
      }
    }

    // Comment
    const twoCharComment = input[end] + input[end + 1];
    if (lexer.dialect.isCommentStart(twoCharComment)) {
      if (lexer.dialect.isInlineCommentStart(twoCharComment)) {
        while (!lexer.dialect.isNewLine(input[end]) && end < input.length) {
          end++;
          lexer.next();
        }
      } else {
        while (
          !lexer.dialect.isCommentEnd(input[end] + input[end + 1]) &&
          end < input.length - 1
        ) {
          end++;
          lexer.next();
        }

        end += 2;
        lexer.next(2);
      }

      if (lexer.options.separators.comment) {
        return {
          type: TokenType.Separator,
          value: input.substring(start, end),
          start,
          end,
        };
      } else {
        return lexer.getNextToken(input);
      }
    }

    lexer.next();
    return lexer.getNextToken(input);
  },
  match: (input, lexer) =>
    lexer.dialect.isSeparator(input[lexer.currentPos]) ||
    (lexer.options.separators &&
      lexer.dialect.isCommentStart(
        input[lexer.currentPos] + input[lexer.currentPos + 1]
      )),
};

export { SeparatorReader };
