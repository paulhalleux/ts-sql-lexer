import { BaseDialect } from "../dialects/dialect";
import { Token } from "./token";
import { Lexer } from "../lexer/lexer";

/**
 * Lexer options.
 * Represents the options that can be passed to the parser.
 * @param dialect The dialect to use.
 * @param separators The separators to include in the parser output.
 */
export type LexerOptions = {
  dialect: BaseDialect;
  separators?: {
    whitespace?: boolean;
    lineBreak?: boolean;
    comment?: boolean;
  };
};

/**
 * Lexer token reader.
 * Represents a function that reads a token from the parser.
 * @param parser The parser to read from.
 * @returns The token that was read.
 */
export type LexerTokenReader = {
  match: (input: string, lexer: Lexer) => boolean;
  read: (input: string, lexer: Lexer) => Token | null;
};
