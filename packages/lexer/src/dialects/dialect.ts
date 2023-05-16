import { Regex } from "../contants/regex";
import { LiteralQuoteType } from "../types";
import { Keyword } from "../contants/keyword";
import { Punctuation } from "../contants/punctuation";
import { Operator } from "../contants/operator";

export class BaseDialect {
  /**
   * Gets the punctuation characters.
   * @returns {string[]} The punctuation characters.
   */
  getPunctuations() {
    return Punctuation;
  }

  /**
   * Gets the operators.
   * @returns {string[]} The operators.
   */
  getOperators() {
    return Operator;
  }

  /**
   * Gets the keywords.
   * @returns {string[]} The keywords.
   */
  getKeywords() {
    return Keyword;
  }

  /**
   * Checks if a character is a whitespace character.
   * @param char The character to check.
   */
  isWhitespace(char: string) {
    return char && Regex.Whitespace.test(char);
  }

  /**
   * Checks if a character is a digit.
   * @param char The character to check.
   */
  isNumericStart(char: string) {
    return char && Regex.NumericStart.test(char);
  }

  /**
   * Checks if a character is a digit.
   * @param char The character to check.
   */
  isNumericPart(char: string) {
    return char && Regex.NumericPart.test(char);
  }

  /**
   * Checks if a character is a digit.
   * @param char The character to check.
   */
  isNumericPartChar(char: string) {
    return char && Regex.NumericPartChar.test(char);
  }

  /**
   * Checks if a character is an identifier start character.
   * @param char The character to check.
   */
  isIdentifierStart(char: string) {
    return char && Regex.Alpha.test(char);
  }

  /**
   * Checks if a character is an identifier part character.
   * @param char The character to check.
   */
  isIdentifierPart(char: string) {
    return char && Regex.AlphaNumericOrUnderscore.test(char);
  }

  /**
   * Checks if a character is a punctuation character.
   * @param char The character to check.
   */
  isPunctuation(
    char: string
  ): char is ReturnType<typeof this.getPunctuations>[number] {
    return char && this.getPunctuations().includes(char as any);
  }

  /**
   * Checks if a character is a literal character.
   * @param char The character to check.
   */
  isLiteral(char: string): char is LiteralQuoteType {
    return char && Regex.Literal.test(char);
  }

  /**
   * Checks if a character is a keyword character.
   * @param char The character to check.
   */
  isKeyword(char: string): char is ReturnType<typeof this.getKeywords>[number] {
    return char && this.getKeywords().includes(char.toLowerCase() as any);
  }

  /**
   * Checks if a character is an operator character.
   * @param char The character to check.
   */
  isOperatorStart(char: string) {
    return char && this.getOperators().some((x) => x.startsWith(char));
  }

  /**
   * Checks if a character is an operator character.
   * @param char The character to check.
   */
  isOperatorPart(char: string) {
    return char && this.getOperators().some((x) => x.includes(char));
  }

  /**
   * Checks if a character is a new line character.
   * @param char The character to check.
   */
  isNewLine(char: string) {
    return char && Regex.NewLine.test(char);
  }

  /**
   * Checks if a character is a separator character.
   * @param char The character to check.
   */
  isSeparator(char: string) {
    return this.isWhitespace(char) || this.isNewLine(char);
  }
}
