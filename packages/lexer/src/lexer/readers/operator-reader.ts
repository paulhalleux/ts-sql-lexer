import { LexerTokenReader } from "../../types/lexer";
import { TokenType } from "../../types";

const OperatorReader: LexerTokenReader = {
  read: (input, lexer) => {
    const start = lexer.currentPos;
    let end = lexer.currentPos;

    while (lexer.dialect.isOperatorPart(input[end])) {
      end++;
      lexer.next();
    }

    const value = input.substring(start, end);
    if (lexer.dialect.getOperators().includes(value as any)) {
      return {
        type: TokenType.Operator,
        value,
        start,
        end: end - 1,
      };
    }

    throw new Error(`Unexpected token: ${value}`);
  },
  match: (input, lexer) =>
    lexer.dialect.isOperatorStart(input[lexer.currentPos]),
};

export { OperatorReader };
